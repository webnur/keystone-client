import React from 'react'
import TopSection from './TopSection'
import ArticleCardGrid from './ArticleCard'
import Pagination from './Pagination'

const page = () => {
  return (
    <div>
        <TopSection />
        <ArticleCardGrid />
        {/* <Pagination /> */}
    </div>
  )
}

export default page