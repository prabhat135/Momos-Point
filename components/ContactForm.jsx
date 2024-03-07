// ContactForm.js

import React, { useState } from 'react';
import './ContactForm.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
      fullWidth
      maxWidth="md"
      onClose={() => setIsOpen(false)}
      className="relative z-50  h-auto mx-auto overflow-auto ">
      <DialogTitle className='bg-[#333F72] flex justify-between '>
        <span className=' items-center mt-4 text-white title text-lg sm:text-xl md:text-4xl pl-4'>Reach to Us</span>
        <h4 className="close-arrow text-2xl sm:text-4xl md:text-6xl text-white" onClick={() => setIsOpen(false)}>&times;</h4>

      </DialogTitle>
      <DialogContent className=" h-auto rounded p-4 sm:p-6 md:p-8 bg-[#333F72] text-white">

        <div className=" h-auto">
          <div className="flex-row justify-between text-end pr-4">

          </div>
          <form onSubmit={handleSubmit} className="h-auto">
            <h4 className=""></h4>
            <div className='p-2 sm:p-4 md:p-6'>
              <label htmlFor="name"></label>
              <TextField
                type="text"
                id="name"
                name="name"
                variant='standard'
                color='primary'
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full text-white"
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white', // text color
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '1px solid white', // underline color before focus
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white', // underline color after focus
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white', // underline color when hovered
                  },
                  '& .MuiFormLabel-root': {
                    color: 'white', // label color
                  },
                  '& label.Mui-focused': {
                    color: 'white', // label color when focused
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white' // placeholder color
                  },
                }}
              />
            </div>
            <div className='p-2 sm:p-4 md:p-6'>
              <label htmlFor="email"></label>
              <TextField
                type="email"
                id="email"
                name="email"
                variant='standard'
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full"
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white', // text color
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '1px solid white', // underline color before focus
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white', // underline color after focus
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white', // underline color when hovered
                  },
                  '& .MuiFormLabel-root': {
                    color: 'white', // label color
                  },
                  '& label.Mui-focused': {
                    color: 'white', // label color when focused
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white' // placeholder color
                  },
                }}
              />
            </div>
            <div className='p-2 sm:p-4 md:p-6'>
              <label htmlFor="phone"></label>
              <TextField
                type="tel"
                id="phone"
                name="phone"
                variant='standard'
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No"
                required
                className="w-full"
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white', // text color
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '1px solid white', // underline color before focus
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white', // underline color after focus
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white', // underline color when hovered
                  },
                  '& .MuiFormLabel-root': {
                    color: 'white', // label color
                    fontWeight: 'bold',
                    borderBottom: '2px solid white',
                  },
                  '& label.Mui-focused': {
                    color: 'white', // label color when focused
                    borderBottom: '2px solid white',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white', // placeholder color
                    borderBottom: '2px solid white',
                  },
                }}
              />
            </div>
            <div className='p-2 sm:p-4 md:p-6'>
              <label htmlFor="query"></label>
              <TextField
                id="query"
                name="query"
                multiline
                variant="standard"
                value={formData.query}
                onChange={handleChange}
                placeholder="Query"
                required
                className="w-full text-white"
                rows={6}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white', // text color
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '1px solid white', // underline color before focus
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white', // underline color after focus
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white', // underline color when hovered
                  },
                  '& .MuiFormLabel-root': {
                    color: 'white', // label color
                  },
                  '& label.Mui-focused': {
                    color: 'white', // label color when focused
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white' // placeholder color
                  },
                }}
              />
            </div>
            <DialogActions>
              <div className="p-2 sm:p-4 md:p-6 justify-center items-center mx-auto text-center">
                <button type="submit" className="w-full contactusButton bg-[#F3EDE1] px-10 py-2 font-bold uppercase">Submit</button>
              </div>
            </DialogActions>
          </form>
        </div>
      </DialogContent>
    </Dialog>


  );
};

export default ContactForm;

