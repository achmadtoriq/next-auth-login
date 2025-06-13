'use client'
import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { deleteFromSupabase, supabase } from '@/lib/supabase';
import { convertAndResizeImage } from '@/lib/utils';

const TinyEditorWrap = ({ value = '', onChange }) => {
    const editorRef = useRef(null);
    const previousImagesRef = useRef([]);

    return (
        <div className="">
            <Editor
                onInit={(evt, editor) => {
                    editorRef.current = editor
                    // Inisialisasi gambar awal
                    const initialImages = Array.from(editor.getBody().querySelectorAll('img'))
                        .map(img => img.src);
                    previousImagesRef.current = initialImages;
                }}
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                init={{
                    menubar: false, // ← ini penting
                    plugins: [
                        'link', 'lists', 'table', 'visualblocks', 'wordcount',
                        'checklist', 'image', 'code'
                    ],
                    toolbar: 'blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | checklist numlist bullist | image',
                    
                    // 👇 Handler upload gambar
                    images_upload_handler: async (blobInfo, success, failure) => {
                        try {
                            const file = blobInfo.blob(); // original file
                            console.log('gdhmbj');
                            console.log(file);

                            const webpBlob = await convertAndResizeImage(file);

                            const fileName = `editor-${Date.now()}.webp`;

                            const { error } = await supabase
                                .storage
                                .from('article-img')
                                .upload(fileName, webpBlob, {
                                    contentType: 'image/webp',
                                });

                            if (error) {
                                console.error(error);
                                return failure('Upload gagal ke Supabase');
                            }

                            const { data } = supabase
                                .storage
                                .from('article-img')
                                .getPublicUrl(fileName);

                            console.log('YRHTDF');
                            console.log(data);

                            return data.publicUrl;
                        } catch (err) {
                            console.error(err);
                            failure('Terjadi kesalahan saat konversi gambar');
                        }
                    },
                    setup: (editor) => {
                        const getCurrentImages = () => Array.from(editor.getBody().querySelectorAll('img')).map(img => img.src);

                        const checkDeletedImages = async () => {
                            const currentImages = getCurrentImages();
                            const deleted = previousImagesRef.current.filter(src => !currentImages.includes(src));

                            if (deleted.length > 0) {
                                for (const url of deleted) {
                                    await deleteFromSupabase(url);
                                }
                                previousImagesRef.current = currentImages;
                            }
                        };

                        editor.on('NodeChange', checkDeletedImages);
                        editor.on('KeyUp', checkDeletedImages); // Deteksi Backspace/Delete
                        editor.on('SetContent', () => {
                            previousImagesRef.current = getCurrentImages(); // inisialisasi awal konten
                        });
                    }
                }}
                onEditorChange={(content) => onChange(content)}
            />
        </div>
    )
}

export default TinyEditorWrap