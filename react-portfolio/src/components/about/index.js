import './index.scss'
import AnimatedLetters from '../animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faDev, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['a', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                </h1>
                <p>drive/motivation</p>
                <p>confidence/determination</p>
                <p>closer</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faDev} color='#188f2f' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#2814d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color='#ec4d28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About