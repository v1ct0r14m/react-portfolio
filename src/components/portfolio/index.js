import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animation'
import './index.scss'

const Portfolio = () => {

    const projects = [
        {
            name: 'run buddy',
            //image: '',
            repo: 'https://github.com/v1ct0r14m/run-buddy',
            url: 'https://v1ct0r14m.github.io/run-buddy/'
        },
        {
            name: 'note taker',
            //image: '',
            repo: 'https://github.com/v1ct0r14m/note-t4ker',
            url: 'https://radiant-reaches-07834.herokuapp.com/'
        },
        {
            name: 'book search',
            //image: '',
            repo: 'https://github.com/v1ct0r14m/book-search',
            url: 'https://google.com'
        },
        {
            name: 'text editor',
            //image: '',
            repo: 'https://github.com/v1ct0r14m/text-editor',
            url: 'https://google.com'
        }
    ]

    const [letterClass] = useState('text-animate')

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={'portfolio'.split('')}
                    idx={15} />
                </h1>
                {/*}<div>
                   {Portfolio(projects)}
                </div>{*/}
            </div>
            <div className='project-container'>
                {
                projects.map((project) => {
                    <div className='image-box' key={project.name}> 
                        {/*} <img src={project.image} className='project-img' alt='portfolio' /> {*/}
                        <div className='content'>
                            <p className='title'>{project.name}</p>
                                <h4 className='description'>{project.description}</h4>
                                <button className='btn' onClick={() => window.open(project.url)}>
                                view
                                </button>
                        </div>
                    </div>
                })
            }
            </div>
            <Loader type='pacman' />
        </>    
    )      
}        

export default Portfolio
