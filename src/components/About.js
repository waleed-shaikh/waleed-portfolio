import React, {useContext, useEffect} from 'react';
import "../components/About.css";
import AOS from 'aos';
import resume from './resume/resume.pdf';
import 'aos/dist/aos.css';
import { themeContext } from '../App';

export default function About() {
    const context = useContext(themeContext);
    const {theme} = context;
    useEffect(() => {
        AOS.init();
        // eslint-disable-next-line
      }, [])
    return (    
        <div className={`p-2 ${theme==='dark'? 'dark-bg':'light-bg'} mt-5`}>
            <div data-aos="fade-up" className='container py-5 px-3"'>
                <h2 className={`text-${theme==='light'?'dark':'light'}`}>About Me</h2>
                <div className='d-flex flex-wrap justify-content-center align-items-center'>
                    <div className="col-lg-6 col-12 mb-auto">
                        <p className="col-11" style={{color:theme==='dark'?'white':'black'}}>I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js &amp; Apart from Front-End, I have good knowledge in Back-End using NodeJS, ExpressJS &amp; MongoDB as well as in designing using CorelDraw, Photoshop, Canva, Adobe Premier Pro and After Effects &amp; Figma, and continuously engage in trying to extend my skills with new technology.</p>
                    </div>
                    <div data-aos="fade-up" className="col-lg-6 col-12 my-4">
                        <h4 className="mb-3" style={{color:theme==='dark'?'white':'black'}}><strong>Any Type Of Query &amp; Discussion</strong> </h4>
                        <h5> <i className={`fas fa-envelope pe-2 text-${theme==='light'?'dark':'light'}`}></i> <a className={`text-${theme==='light'?'dark':'light'}`} href="mailto:gauravghai@htmlhints.com">waleedsdev@gmail.com</a></h5>
                        <div className="pt-4">
                            <a target="_blank" rel="noreferrer" href={resume} className="custom-button abtn px-4 py-2" style={{color:theme==='dark'?'white':'black'}}><i className="fa fa-download"></i>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
