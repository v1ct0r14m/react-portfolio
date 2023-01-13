import './index.scss'
import emailJs from '@emailjs/browser'
import { useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animation'


const Contact = () => {

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
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input placeholder='name' type='text' name='name' required />
                            </li>
                            <li className='half'>
                                <input placeholder='email' type='email' name='email' required />
                            </li>
                            <li>
                                <input placeholder='subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='message' name='message' required>
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>

)}


export default Contact