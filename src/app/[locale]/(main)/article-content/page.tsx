"use client"
import React from 'react'
import ArticleCard from './LeftSideCard'
import StickySidebar from './RightSidebar'

const page = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
      <ArticleCard />
      <StickySidebar />
    </div>
  )
}

export default page