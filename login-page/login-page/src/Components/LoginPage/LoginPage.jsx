import React from 'react'
import './LoginPage.css'

export const LoginPage = () => {

  return (
    <div className = 'container'>
      <div className = "header">
        <div className = "text">
          Log In
        </div>
        <div className = "underline">
        </div>
      </div>
      <div className = "inputs">
        <div className="input">
          <input type="text" placeholder= "Username"/>
        </div>
        <div className="input">
          <input type="password" placeholder= "Password" />
        </div>
      </div>
      <div className = "submit-container">
        <div className="submit">
          Sign Up
        </div>
        <div className="submit">
          Login
        </div>
      </div>
    </div>
  )
}