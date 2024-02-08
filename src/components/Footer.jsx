import React from 'react'
import Fb from '../assets/svg/fb.svg'
import X from '../assets/svg/x.svg'
import Linkedin from '../assets/svg/linkedin.svg'
import Instagram from '../assets/svg/instagram.svg'
import Pintrest from '../assets/svg/pintrest.svg'
import Youtube from '../assets/svg/youtube.svg'
// import Apple from '../assets/images/apple.png'
import Google from '../assets/images/google.png'
import Apple from '../assets/images/apple-2.png'

const Footer = () => {
  return (
    <footer>
        <div className="social-icon">
            <div className='icon'>
                <img src={Fb} alt="" />
            </div>
            <div className='icon'>
                <img src={X} alt="" />
            </div>
            <div className='icon'>
                <img src={Linkedin} alt="" />
            </div>
            <div className='icon'>
                <img src={Instagram} alt="" />
            </div>
            <div className='icon'>
                <img src={Pintrest} alt="" />
            </div>
            <div className='icon'>
                <img src={Youtube} alt="" />
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    About us
                </li>
                <li>
                    Careers
                </li>
                <li>
                    Accessibilities
                </li>
                <li>
                    Feedback
                </li>
                <li>
                    Terms
                </li>
                <li>
                    Tech Blog
                </li>
                <li>
                    Agent Blog
                </li>
            </ul>
        </nav>

        <div className="get-app">
            <p>Get the app (coming soon...)</p>
            <div className="apple">
                <img src={Apple} alt="" />
            </div>
            <div className="google">
                <img src={Google} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer
