import React from 'react'

const HeaderBody = () => {
  return (
    <div className='main'>
      <div className="absolute-img--figure"></div>
      <div className="absolute-img--woman"></div>

      <div className="main__title-container">
        <div className="main__title-block">
          <div className="main__title-block--little">
            <hr className='main__line--blue'/>
            <h3 className='main__title--little'>WTG SPAIN</h3>
          </div>
          <div className="main__title-block--big">
            <h1 className='main__title--big'>Do you need <span className='blue-text'>some help</span>?</h1>
            <p className='main__title--big-text'>Contact us right now and our team will do everything to help you.</p>
          </div>
          <button className='main__title-button'>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBody