import React from 'react'
import { useState } from 'react'

const Company = (props) => {

  const [country, setCountry] = useState('India');

  const handleCountryNameChange = (event) => {
    console.log('************')
    setCountry(event.target.value);
  }

  return (
    <div>
      <h2>Company | Testing props, state, events, css stuff, snapshot testing</h2>
      <p data-testid='companyNameEl'>{props.name}</p>
      <p>Welcome to my Company's official website!</p>

      <div>
        <p>Employee Count:</p>
        <p data-testid='empCountEl' style={{color: 'green'}}>320000+</p>
      </div>

      <button className='btn'>JOIN NOW </button>
      {/* <a className='btn' href='#' role='button'>JOIN NOW</a> */}

      <br/><br/>
      <input type='text' placeholder='Enter Country' 
        value={country} onChange={handleCountryNameChange} />
      <p data-testid="websiteCountryTxt">Head over to Cognizant {country} Website</p>

    </div>
  )
}

export default Company