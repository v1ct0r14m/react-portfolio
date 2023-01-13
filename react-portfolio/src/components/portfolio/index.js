import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animation'
import './index.scss'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            return () => clearTimeout(timer)
        })
    })

    useEffect(() => {
        getPortfolio()
    }, [])

    getPortfolio = (portfolio) => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'))
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
    }

    const renderPortfolio = (portfolio) => {
        return {
            
        }
    }

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'portfolio'.split}
                            idx={15} 
                        />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio