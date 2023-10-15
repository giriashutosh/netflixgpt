import React from 'react'
import { BG_URL } from '../utils/constant'
import GPTSearchBar from './GPTSearchBar'

const GPTSearchPage = () => {
  return (
    <div >
        <div className='absolute'>
        <img src={BG_URL} alt=''/>
        
        </div>
        <GPTSearchBar/>
    </div>
  )
}

export default GPTSearchPage