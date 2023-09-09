import React from 'react'

import { useMovieTrailer } from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId)
    const video = useSelector(store => store.movies?.movieTrailer)
    console.log(video)
    return (
        <div>
            <iframe
                className='w-screen aspect-video'

                src={"https://www.youtube.com/embed/" + video?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; "
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground
