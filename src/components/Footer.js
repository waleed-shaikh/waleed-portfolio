import React, { useContext, useEffect } from 'react';
import "../components/Footer.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { themeContext } from '../App';

export default function Footer() {
    const context = useContext(themeContext);
    const {theme} = context
    useEffect(() => {
        AOS.init();
        // eslint-disable-next-line
      }, [])
    return (
        <section className={`py-5 ${theme==='dark'?'dark-abg':'light-abg'} footer`}>
            <div className="text-center">
                <h2 className="mb-4">Stay Connected</h2>
                <p className="m-0"><small>Mumbai Thane, India</small></p>
                <a href="mailto:gauravghai@htmlhints.com" className="m-0 text-white" style={{ fontSize: "20px" }}><strong>waleedsdev@gmail.com</strong></a>
                <p>(+91) 7498608775</p>
                <div className="d-flex social-mid pt-3">
                    <div className='pe-3'>
                        <a className='text-white' rel="noreferrer" href="https://www.linkedin.com/in/waleedsdev" target="_blank"><i className='fab fa-linkedin'></i></a>
                    </div>
                    <div className='pe-3'>
                        <a className='text-white' rel="noreferrer" href="https://github.com/waleed-shaikh" target="_blank"><i className='fab fa-github'></i></a>
                    </div>
                    <div className='pe-3'>
                        <a className='text-white' rel="noreferrer" href="https://www.instagram.com/waleedsdev/" target="_blank"><i className='fab fa-instagram'></i></a>
                    </div>
                    <div className='pe-3'>
                        <a className='text-white' rel="noreferrer" href="https://www.facebook.com/waleedsdev/" target="_blank"><i className='fab fa-twitter'></i></a>
                    </div>
                    <div className='pe-3'>
                        <a className='text-white' rel="noreferrer" href="https://www.youtube.com/" target="_blank"><i className='fab fa-youtube'></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
