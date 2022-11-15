export default () => {
  return (
    <div className="userBox">
      <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="avatar" className="userAvatar"/>
      <div className="userinfo">
        <h4 className="username">Username</h4>
        <h6 className="discriminator">#1234</h6>
      </div>
      <div className="usermenuicons">
        <div className="mic" id="micToggle"/>
        <div className="headphone" id="headphoneToggle"/>
        <div className="settings" id="settingsToggle"/>
      </div>
    </div>
  )
}