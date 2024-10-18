import React from 'react'
import FilterComponent from './Filter'
import ProgramList from './ProgramList'

const page = () => {
  return (
    <div className='flex'>
      <FilterComponent />
      <ProgramList />
    </div>
  )
}

export default page