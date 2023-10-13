/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */


export const Button = ({color , icon , text}) => {
    const classNames = {
        "github" : "fa-brands fa-github",
        "globe": "fa-solid fa-globe",
        "newspaper": "fa-solid fa-newspaper",
        "linkedin": "fa-brands fa-linkedin",
        "whatsapp": "fa-brands fa-whatsapp",
        "twitter": "fa-brands fa-twitter",
        "instagram": "fa-brands fa-instagram"

    }
  return (
    <div className="btn-container">
        <button className={`btn-${color}`}><i className={classNames[icon]}></i> {text}</button>

    </div>
        
  )
}
