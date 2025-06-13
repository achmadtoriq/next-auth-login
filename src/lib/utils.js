export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  });

  return formatter.format(date);
};


// helper untuk resize dan convert ke WebP
export async function convertAndResizeImage(file) {
  const maxWidth = 1000;
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const scale = maxWidth / img.width;
      const width = Math.min(img.width, maxWidth);
      const height = img.height * scale;

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error('Resize failed'));
          resolve(blob);
        },
        'image/webp',
        0.8
      );
    };
    reader.readAsDataURL(file);
  });
}