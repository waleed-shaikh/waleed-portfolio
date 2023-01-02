import React, { useContext } from 'react';
import { themeContext } from '../App';
import "../components/Section.css";
import MyImage from "./img/waleed.png";

export default function Section() {
    const context = useContext(themeContext);
    const {theme} = context;    
    return (
        <div className='container section'>
            <div className="d-flex flex-wrap justify-content-center align-items-center hero-sec">
                <div className="col-md-7 col-10 d-lg-none d-block mt-5">
                    <img src={MyImage} alt="img" className="avatar w-100"/>
                </div>
                <div className="col-lg-6 col-12 px-3 text-lg-start text-center">
                    <h1 className={`pb-2 text-${theme==='light'?'dark':'light'}`}>Waleed <br/>Shaikh</h1>
                    <p className={`text-${theme==='light'?'dark':'light'}`}>MERN STACK Web Developer, Content Creater <br />
                        & Graphic Designer.</p>
                    <div className='d-flex social'>
                        <div className='pe-3'>
                            <a className={`text-${theme==='light'?'dark':'light'}`} rel="noreferrer" href="https://www.linkedin.com/in/waleedsdev" target="_blank"><i className='fab fa-linkedin'></i></a>
                        </div>
                        <div className='pe-3'>
                            <a className={`text-${theme==='light'?'dark':'light'}`} rel="noreferrer" href="https://github.com/waleed-shaikh" target="_blank"><i className='fab fa-github'></i></a>
                        </div>
                        <div className='pe-3'>
                            <a className={`text-${theme==='light'?'dark':'light'}`} rel="noreferrer" href="https://www.instagram.com/waleedsdev/" target="_blank"><i className='fab fa-instagram'></i></a>
                        </div>
                        <div className='pe-3'>
                            <a className={`text-${theme==='light'?'dark':'light'}`} rel="noreferrer" href="https://www.twitter.com/waleedsdev/" target="_blank"><i className='fab fa-twitter'></i></a>
                        </div>
                        <div className='pe-3'>
                            <a className={`text-${theme==='light'?'dark':'light'}`} rel="noreferrer" href="https://www.skype.com/" target="_blank"><i className='fab fa-youtube'></i></a>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <a href="mailto:waleedsdev@gmail.com" className="custom-button px-4 py-2">Let's Chat</a>
                    </div>
                </div>
                <div className="col-lg-6 d-lg-block d-none">
                    <img src={MyImage} alt="img" className="avatar w-100"/>
                </div>
            </div>
        </div>
    )
}
