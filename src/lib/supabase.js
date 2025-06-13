import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function deleteFromSupabase(url) {
    const prefix = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/article-img/`;
    const path = url.replace(prefix, '');
  
    const { error } = await supabase
      .storage
      .from('article-img')
      .remove([path]);
  
    if (error) console.error('Gagal hapus:', error.message);
    else console.log('Berhasil hapus:', path);
  }