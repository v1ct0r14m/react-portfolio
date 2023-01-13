import './index.scss'
import emailJs from '@emailjs/browser'
import Loader from 'react-loaders'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
}

const sendEmail = (e) => {
    e.preventDefault()

    emailJs
        .sendform('gmail', 'template_YeJhZkgb',)
}

export default Contact