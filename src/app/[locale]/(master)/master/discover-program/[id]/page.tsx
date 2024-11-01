import React from 'react'
import FilterComponent from './Filter'
import ProgramList from './ProgramList'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <FilterComponent />
      <ProgramList />
    </div>
  )
}

export default page