import React from 'react'
import TeamSection from '../components/TeamSection'
import Navbar from '../components/Navbar'

export const Team = () => {
    return (
      <>
      <Navbar/>
      <div className='bg-green-900 mt-20'>
        <TeamSection designation="Founders" title="Founders" collectionName="founders" />
        <TeamSection designation="Patron-in-chief" title="Patron-in-chief" collectionName="patron-in-chief" />
        <TeamSection designation="Advisory Board" title="Advisory Board" collectionName="advisory-board" />
      </div>
      </>
  )
}
