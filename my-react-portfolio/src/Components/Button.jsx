/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */


export const Button = ({color , icon , text}) => {
  return (
    <div className="btn-container">
        <button className={`btn ${color}`}><i class={`fa-brands fa-${icon}`}></i>{text}</button>

    </div>
        
  )
}
