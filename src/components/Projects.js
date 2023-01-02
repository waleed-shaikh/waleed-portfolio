import React, { useContext, useEffect } from 'react';
import "../components/Projects.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { themeContext } from '../App';

export default function Projects(props) {
    const context = useContext(themeContext);
    const {theme} = context;
    useEffect(() => {
        AOS.init();
        // eslint-disable-next-line
      }, [])
    return (
        <section className='container pb-5'>
            <div className='d-flex flex-wrap py-5'>
                {props.project.map((elm) => (
                    <div key={elm.id} data-aos="fade-up" className={`col-md-10 col-12 py-4 ${elm.position} d-flex justify-content-center`}>
                        <div className={`col-12 p-5 ${elm.bg} d-flex`}>
                            <div className="col-md-8 col-12">
                                <p className={`m-0 ${elm.textColor}`}>
                                    <small><u>{elm.title}</u></small></p>
                                <h2 className={`${elm.textColor}`}>{elm.heading}</h2>
                                <p className={`${elm.textColor}`}>{elm.details}</p>
                                <div className="pt-4">
                                    <a className={`${theme==='dark'?'button':'custom-button'} px-4 py-2`} href={elm.url}>View Project</a>
                                </div>
                            </div>
                            <div className="my-auto text-end col-4 d-md-block d-none">
                                <a href="https://www.htmlhints.com/workshop"><i className="fas fa-3x fa-arrow-circle-right" style={{ 'color': 'Black' }}></i></a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
