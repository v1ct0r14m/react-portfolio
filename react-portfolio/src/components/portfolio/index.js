import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animation'
import './index.scss'
import { db } from '../../data'
import { collection } from '../../data'

const Portfolio = () => {
    const [letterClass] = useState('text-animate')



    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}> 
                                <img src={port.image} className='portfolio-img' alt='portfolio' />
                                <div className='content'>
                                    <p className='title'>{port.name}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='btn' onClick={() => window.open(port.url)}>
                                    view
                                    </button>
                                </div>
                            </div>
                        )
                    }            
                )}    
            </div>
        )    
}

export default Portfolio