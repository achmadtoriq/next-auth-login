export function CustomPlugin(editor) {
  const conversion = editor.conversion;
  
  conversion.for('downcast').elementToElement({
    model: 'bulletedList',
    view: (model, { writer }) =>
      writer.createContainerElement('ul', { class: 'list-disc pl-6 text-base' })
  });
  conversion.for('downcast').elementToElement({
    model: 'numberedList',
    view: (model, { writer }) =>
      writer.createContainerElement('ol', { class: 'list-decimal pl-6 text-base' })
  });
  conversion.for('downcast').elementToElement({
    model: 'listItem',
    view: (model, { writer }) =>
      writer.createContainerElement('li', { class: 'mb-1' })
  });

  editor.conversion.for("downcast").elementToElement({
    model: "paragraph",
    view: {
      name: "p",
      classes: "text-base leading-relaxed",
    },
  });
}
