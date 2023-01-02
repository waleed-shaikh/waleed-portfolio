import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './language.css'
import html from './languages/html.png';
import css from './languages/css.png';
import javascript from './languages/javascript.png';
import react from './languages/react.png';
import nodejs from './languages/nodejs.png';
import mongodb from './languages/mongodb.png';
import { themeContext } from '../App';

const Language = () => {
    const context = useContext(themeContext)
    const {theme} = context;
    useEffect(() => {
        AOS.init();
        // eslint-disable-next-line
      }, [])
  return (
    <div className='container'> 
        <h2 className={`mb-4 text-center text-${theme==='dark'?'light':'dark'}`}>Languages</h2>
        <div class="langContainer py-4" style={{backgroundColor:theme==='dark'?'rgba(207, 207, 207, 0.04)':'rgba(207, 207, 207, 0.294)'}}>
            <div data-aos="fade-up" class="langItem my-3">
                <img className='language' src={html} alt="loading" />
            </div>
            <div data-aos="fade-up" class="langItem my-3">
                <img className='language' src={css} alt="loading" />
            </div>
            <div data-aos="fade-up" class="langItem my-3">
                <img className='language' src={javascript} alt="loading" />
            </div>
            <div data-aos="fade-up" class="langItem my-3">
                <img className='language' src={react} alt="loading" />
            </div>
            <div data-aos="fade-up" class="langItem my-3">
                <img className='language' src={mongodb} alt="loading" />
            </div>
            <div data-aos="fade-up" class="langItem my-3">
                <img className='language' src={nodejs} alt="loading" />
            </div>
        </div>
    </div>
  )
}

export default Language
