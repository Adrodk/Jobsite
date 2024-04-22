import React from 'react'
import Hero from '../components/Hero'
import Browse from '../components/Browse'
import Jobs from '../components/Jobs'
import ViewAll from '../components/ViewAll'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Browse />
    <Jobs isHome={true} />
    <ViewAll />
    </>
  )
}

export default HomePage