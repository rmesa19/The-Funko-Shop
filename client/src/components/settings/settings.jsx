import React from 'react'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Username</label>
          <input type="text" placeholder="username" name="name" />
          <label>Email</label>
          <input type="email" placeholder="email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
        </div>
    )
}
