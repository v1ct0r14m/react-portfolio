import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animation'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = [' ', 'v', 'i', 'c', 't', 'o', 'r', 'i', 'a', '.']
    const jobArray = ['w','e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    //  useEffect(() => {
    //      return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //      },  4000)
    //  }, [])

    return (
        <>
        <div className='conatiner home-page'>
            <div className='text-zone'>

                <h1>
                    <span className={letterClass}>h</span>
                    <span className={`${letterClass} _12`}>o</span>
                    <span className={`${letterClass} _12`}>w</span>
                    <span className={`${letterClass} _12`}>d</span>
                    <span className={`${letterClass} _12`}>y,</span>
                <br />
                    <span className={`${letterClass} _13`}>i</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                
                <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                </h1>

                <h2>frontend developer / creative individual</h2>
                <Link to='/contact' className='flat-button'>contact me</Link>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home