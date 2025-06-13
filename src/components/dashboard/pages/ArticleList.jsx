import { getContentList } from '@/lib/data-mysql';
import React from 'react'
import { formatDate } from '@/lib/utils';

const ArticleList = async () => {
    const articles = await getContentList();
    if (!articles?.length) return <h1 className="text-2xl">No Menus Found</h1>
    return (
        <>
            <table className="w-full mt-3">
                <thead className="border-b border-gray-400">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm">No</th>
                        <th className="py-3 px-6 text-left text-sm">Judul</th>
                        <th className="py-3 px-6 text-left text-sm">Ringkasan</th>
                        <th className="py-3 px-6 text-left text-sm">Waktu di buat</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((article, idx) => (
                            <tr key={article.id}>
                                <td className="py-3 px-6">{ ++idx }.</td>
                                <td className="py-3 px-6">{article.title}</td>
                                <td className="py-3 px-6">{article.content}</td>
                                <td className="py-3 px-6">{formatDate(article.created_at)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ArticleList