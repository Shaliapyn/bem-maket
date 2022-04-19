import React from "react"

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <form className="ContactUs_form" action="">
        <h2 className="ContactUs__title">Contact us</h2>
        <div className="ContactUs__inputs">
          <input className="ContactUs__inp--name ContactUs-inp" placeholder="Name" type="text" />
          <input className="ContactUs__inp--numb ContactUs-inp" placeholder="Phone" type="number" />
          <input className="ContactUs__inp--email ContactUs-inp" placeholder="Email" type="email" />
          <textarea className="ContactUs__message" placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="ContactUs-btn">Send</button>
        <p className="ContactUs_footer-text">Privacy policy</p>
      </form>
    </div>
  )
}

export default ContactUs