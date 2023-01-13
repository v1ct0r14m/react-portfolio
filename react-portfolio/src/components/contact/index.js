import './index.scss'
import emailJs from '@emailjs/browser'
import { useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animation'

const [letterClass] = useState('text-animate')
const form = useRef()

const sendEmail = (e) => {
    e.preventDefault()

    emailJs.sendform('gmail', form.current)
    .then(
        () => {
            alert('email sent!')
            window.location.reload(false)
        },
        () => {
            alert('failed to send email')
        }
    )
}

const Contact = () => {
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>
                    gimme job pls
                </p>
            </div>
        </div>
        <Loader type='pacman' />
    </>

)}


export default Contact