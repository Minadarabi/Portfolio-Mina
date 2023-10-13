/* eslint-disable react/prop-types */


export const Tag = ({color , content}) => {
  return (
    <div className="tag" style={{backgroundColor: color}}>
        <span>{content}</span>
    </div>
  )
}
