import React from 'react';
import "./Contact.css";
import { BsArrowRightCircle } from 'react-icons/bs';
import sections from '../../constants/data';
import ugls from '../../assets/images/ugls.jpg'; // Import your image file

const Info = () => {
  return (
    <div className='info bg-md-black section-p'>
      <div className='container'>
        <div className='info-content'>
            <div className='item-list grid text-center'>
                {
                    sections.contact.map(contact => {
                        return (
                          
                            <div className='item bg-carddark translate-effect' key={contact.id}>
                              <img src={ugls} alt="Contact" className="contact-image" />
                                
                                <div className='item-info-text fw-5 text-white'>{contact.info}</div>
                                <p className='text'>{contact.text}</p>
                                {/* Add your image here */}
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info;
