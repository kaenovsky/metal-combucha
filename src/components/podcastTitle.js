import React from "react"

const PodcastTitle = () => (
    <div className='podcast-wrapper'>       
        <h3 className='site-title-radio'>
        <img className='x-index-cross' src="https://taberna-odin-bucket.eu-central-1.linodeobjects.com/cross.svg" alt='cross'></img>
        Podcast</h3>
        <a className='btn-more-episodes' 
        href='https://open.spotify.com/show/7zsXG6svLmS4sUBJrSBqRx?si=3FJoJtMMT1qjUebUVoUQww'
        target='_blank'
        rel="noreferrer">
            Escuchá todos los capítulos
        </a>        
    </div>
)

export default PodcastTitle
