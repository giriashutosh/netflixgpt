import React from 'react'
import playIcon from '../assets/images/playIcon.png'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video absolute bg-gradient-to-r from-black '>
            <div className='w-80 mt-60 m-20'>
                <h2 className='text-3xl font-bold text-white'>{title}</h2>
                <p className='mt-4 text-white'>{overview}</p>
                <div className='mt-4 flex gap-4'>
                <button className='bg-gray-200 p-2 px-6 rounded-lg font-semibold hover:bg-gray-400 flex items-center gap-1'>
                    <img src={playIcon} alt='' className='w-7' />
                    Play

                </button>
                <button className='bg-gray-400 p-2 px-6 rounded-lg font-semibold'>more info</button>
            </div>
            </div>
           

        </div>
    )
}

export default VideoTitle
