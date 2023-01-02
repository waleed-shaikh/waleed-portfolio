import React, { useContext, useEffect } from 'react';
import "../components/Inquiry.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { themeContext } from '../App';

export default function Inquiry() {
    const context = useContext(themeContext);
    const {theme} = context;
    useEffect(() => {
        AOS.init();
        // eslint-disable-next-line
      }, [])
    return (
        <div className={`d-flex flex-wrap py-lg-5 py-3 ibg px-2 ${theme==='dark'? 'dark-ibg':'light-ibg'}`}>
            <div data-aos="fade-up" className="col-lg-8 col-12 mx-auto work-inquiry p-lg-5 p-4 d-flex flex-wrap">
                <div className="col-lg-9 col-12">
                    <h2 className='text-dark'>Work Inquiry</h2>
                    <p className="m-0 text-dark">Let's work together and i'll help you by all my best</p>
                </div>
                <div className="col-lg-3 col-6 my-auto pt-lg-auto pt-4">
                    <a className="custom-button px-4 py-2" href="mailto:gauravghai@htmlhints.com">Let's Chat</a>
                </div>
            </div>
        </div>
    )
}
