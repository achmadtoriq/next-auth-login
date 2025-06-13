import { auth } from '@/auth'
import ArticleEditor from '@/components/dashboard/pages/ArticleAdd'
import React from 'react'

const AddContentPage = async() => {
    const session = await auth()
  return (
    <>
      <h1 className="text-2xl font-bold">Editor</h1>
      <ArticleEditor session={session}/>
    </>
  )
}

export default AddContentPage