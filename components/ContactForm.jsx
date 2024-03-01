// ContactForm.js

import React, { useState } from 'react';
import './ContactForm.css';
import { Dialog } from '@headlessui/react';

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: '',
    });
    let [isOpen, setIsOpen] = useState(true)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for form submission here
        console.log('Form submitted:', formData);
        // Close the form or perform any other necessary actions
        onClose();
    };

    return (
        <>
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 w-1/2">

      <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>

          <div className="contact-form-modal">
            <span className="close-arrow" onClick={onClose}>&times;</span>
            <form onSubmit={handleSubmit}>
                <h2>Reach to Us</h2>
                <div className='contact-form-field'>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                    />
                </div>
                <div className='contact-form-field'>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className='contact-form-field'>
                    <label htmlFor="phone"></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone No"
                        required
                    />
                </div>
                <div className='contact-form-field'>
                    <label htmlFor="query"></label>
                    <textarea
                        id="query"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        placeholder="Query"
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        </Dialog.Panel>
    </Dialog>
        
        </>
       
    );
};

export default ContactForm;

    