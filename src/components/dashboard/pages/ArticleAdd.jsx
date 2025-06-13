'use client'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const TinyWrapper = dynamic(() => import('@/components/TinyEditorWrap'), {
    ssr: false,
});

export function addTailwindClasses(html) {
    if (!html) return '';

    return html
        .replace(/<h2/g, '<h2 class="text-2xl font-bold"')
        .replace(/<ul>/g, '<div class="pl-5"><ul class="list-disc pl-5 mb-4">')
        .replace(/<\/ul>/g, '</ul></div>')
        .replace(/<ol>/g, '<div class="pl-5"><ol class="list-decimal pl-5 mb-4">')
        .replace(/<\/ol>/g, '</ol></div>')
        .replace(/<li>/g, '<li class="mb-1">');
}

function getSummaryContent(content, wordLimit = 30) {
    // Buang tag HTML
    const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    const words = text.split(' ');
    // Ambil 20 kata pertama
    return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '' : '');
}

const ArticleEditor = ({ session }) => {
    const [editorData, setEditorData] = useState(null);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState(null);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content: getSummaryContent(editorData),
            content_html: addTailwindClasses(editorData)
        };

        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Gagal menyimpan data');

            const json = await res.json();

            console.log(json);

            router.push(`/artikel`)
            // setEditorData(null)
            // setTitle('')

            // if (json.response_code !== 200) {
            //     setMessage(<p className='w-[20%] py-2.5 px-2 rounded-sm border border-red-600 bg-red-100 text-red-700 font-bold'>{json.message}</p>)
            // } else {
            //     setMessage(<p className='w-[20%] py-2.5 px-2 rounded-sm border border-green-600 bg-green-100 text-green-600 font-bold'>{json.message}</p>)
            // }
        } catch (error) {
            router.refresh()
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='gird grid-cols-1 my-4'>
                    <div className={`flex flex-row ${message ? 'justify-between' : 'justify-end'} items-center gap-5`} >
                        {message}
                        <button type='submit' className='px-4 py-2 font-bold text-black bg-amber-400 rounded-sm'>Simpan</button>
                    </div>
                    <div className="grid grid-cols-2 gap-5 my-6">
                        <div className=''>
                            <h2 className='text-lg font-bold'>Title: </h2>
                            <input type="text" value={title}
                                onChange={(e) => setTitle(e.target.value)} className='w-full p-3 bg-white rounded-md my-2.5 outline-1 outline-gray-300 focus:outline-black' placeholder='Tentuakn judulnya' />
                            <h2 className='text-lg font-bold my-2.5'>Description: </h2>
                            <TinyWrapper value={editorData} onChange={setEditorData} />
                            {editorData && session.user.role === "admin" && (
                                <div>
                                    <div>
                                        <h2 className='text-lg font-bold my-2.5'>HTML Tags: </h2>
                                    </div>
                                    <pre className="mt-2 p-4 border rounded-md bg-gray-100 text-sm text-wrap">
                                        {addTailwindClasses(editorData)}
                                    </pre>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <h2 className='text-lg font-bold'>Preview: </h2>
                            </div>
                            {editorData && (
                                <div
                                    className="prose p-4 border my-2.5 bg-white rounded-md text-justify"
                                    dangerouslySetInnerHTML={{ __html: addTailwindClasses(editorData) }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ArticleEditor