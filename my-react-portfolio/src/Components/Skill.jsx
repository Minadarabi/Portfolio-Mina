import { Tag } from "./Tag"


export const Skill = () => {
  return (
    <div className="skill">
        <h1>Skills</h1>
      <div className="skill-container">
        <div className="code-container">
        <Tag color="#EB5577" content="Code"/>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Javascript ES6</p>
        <p>React</p>
        <p>Styled Components</p>
        <p>GitHub</p>

        </div>
        <div className="toolbox-container">
        <Tag color="#2483E0" content="Toolbox"/>
        <p>Atom</p>
        <p>Postman</p>
        <p>Adobe Photoshop</p>
        <p>Adobe Illustrator</p>
        <p>Figma</p>
        <p>Keynote</p>
        <p>Slack</p>

        </div>
        <div className="upcoming-container">
        <Tag color="#6DB486" content="Upcoming"/>
        <p>Node.js</p>

        </div>
        
        <div className="more-container">
        <Tag color="#FFDE30" content="More"/>
        <p>Atom</p>
        <p>Postman</p>
        <p>Adobe Photoshop</p>
        <p>Adobe Illustrator</p>
        <p>Figma</p>
        <p>Keynote</p>
        <p>Slack</p>

        </div>
        

        </div>
       
       
    </div>
  )
}
