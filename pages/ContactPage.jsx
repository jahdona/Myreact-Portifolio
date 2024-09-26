import React from 'react'

const ContactPage = () => {
  return (
    <>
  
        <div className="center">
  <div className="container">
  
      <h1 className="title">Contact first ☝️</h1>
    
      <div className="form form__1">
        <label for="name" className="formLabel">Full name</label>
        <input type="text" className="formInput" placeholder="" id="name" required/>
      </div>
    
      <div className="form">
        <label for="email" className="formLabel">Email address</label>
        <input type="email" className="formInput" placeholder="" id="email" required/>
      </div>
    
      <div className="form form__3">
        <label for="message" className="formLabel">Your message</label>
        <input type="text" className="formInput" placeholder="" id="message" required/>
      </div>
    
      <button className="formBtn">
       Submit &#8594;
         
      
       
      </button>
  
    <div className="containerMail">
      <div className="mail">
        <div className="mailBack"></div>
        <div className="mailTop"></div>
        <div className="mailLetter">
          <div className="mailLetterSquare">
          </div>
          <div className="mailLetterLines">
          </div>
        </div>
        <div className="mailLeft"></div>
        <div className="mailRight"></div>
        <div className="mailBottom"></div>
      </div>
    </div>
    
  </div>
</div>
    </>
  )
}

export default ContactPage