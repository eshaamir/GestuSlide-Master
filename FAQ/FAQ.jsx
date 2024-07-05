import React from 'react';
import "./FAQ.css";
import sections from '../../constants/data';
import SingleFAQ from './SingleFAQ';
import images from '../../constants/images';

const FAQ = () => {
  return (
    <section className='features section-p bg-black' id = "features">
        <div className='container'>
        <h1 className='heading'>Unlock the Power of Gesture Recognition <br/>Your Burning Questions Answered!</h1>
            <div className='features-content'>
                <div className='item-list text-White'>
                    {
                        sections.features.map(feature => {
                            return (
                                <SingleFAQ key = {feature.id} {...feature} />
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default FAQ;
