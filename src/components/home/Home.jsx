import React from 'react'
import companies from '../../assets/companies.png'

function Home() {
  return (
    <div className='dark:bg-zinc-900'>
      <div>
        main
      </div>
      <div>
        <img className='p-20' src={companies} alt="" />
      </div>
      <div className='text-white'>
        Featured Projects
      </div>
    </div>
  )
}

export default Home
