// ContactForm.js

import React, { useState } from 'react';
import './ContactForm.css';
import { Dialog } from '@headlessui/react';

const ContactForm = ({ setIsOpen, isOpen }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for form submission here
        console.log('Form submitted:', formData);
        // Close the form or perform any other necessary actions
        setIsOpen(false)
    };

    return (
        <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 w-full sm:w-3/4 md:w-1/2 h-auto mx-auto">
      
        <Dialog.Panel className="w-full max-w-sm h-auto mx-auto rounded bg-white p-4 sm:p-6 md:p-8">
            <Dialog.Title className="text-lg sm:text-xl md:text-2xl">Complete your order</Dialog.Title>
      
            <div className="contact-form-modal">
              <div className="flex-row justify-between text-end pr-4">
      
              <h4 className="close-arrow text-2xl sm:text-4xl md:text-6xl" onClick={() => setIsOpen(false)}>&times;</h4>
              </div>
              <form onSubmit={handleSubmit} className="h-auto">
                  <h4 className="text-lg sm:text-xl md:text-4xl pl-4">Reach to Us</h4>
                  <div className='p-2 sm:p-4 md:p-6'>
                      <label htmlFor="name"></label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          required
                          className="w-full"
                      />
                  </div>
                  <div className='p-2 sm:p-4 md:p-6'>
                      <label htmlFor="email"></label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                          className="w-full"
                      />
                  </div>
                  <div className='p-2 sm:p-4 md:p-6'>
                      <label htmlFor="phone"></label>
                      <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone No"
                          required
                          className="w-full"
                      />
                  </div>
                  <div className='p-2 sm:p-4 md:p-6'>
                      <label htmlFor="query"></label>
                      <textarea
                          id="query"
                          name="query"
                          value={formData.query}
                          onChange={handleChange}
                          placeholder="Query"
                          required
                          className="w-full"
                      />
                  </div>
                  <div className="p-2 sm:p-4 md:p-6 justify-center items-center mx-auto text-center">
                      <button type="submit" className="md:w-1/4 w-full">Submit</button>
                  </div>
              </form>
          </div>
          </Dialog.Panel>
      </Dialog>
        
       
    );
};

export default ContactForm;

    