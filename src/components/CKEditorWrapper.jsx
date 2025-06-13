'use client';

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomPlugin } from '@/lib/CustomPlugin'


ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading', '|',
      'bold', 'italic', 'link', '|',
      'bulletedList', 'numberedList', '|',
      'blockQuote', 'codeBlock', 'sourceEditing'
    ]
  },
  list: { properties: { styles: true, startIndex: true, reversed: true, classes: true } },
  heading: { options: [
      { model: 'heading1', view: { name: 'h1', classes: 'text-4xl font-bold' }, title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: { name: 'h2', classes: 'text-2xl font-bold' }, title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }
    ]
  },
  language: 'id',
  extraPlugins: [CustomPlugin]
};

export default function CKEditorWrapper({ value, onChange }) {
  return (
    <div className='z-10'>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
}