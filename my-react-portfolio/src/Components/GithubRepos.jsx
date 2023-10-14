
import { useEffect,useState } from 'react'
import repoImages from "../repo.json"
import { Tag } from './Tag';
import { Button } from './Button';

export const GithubRepos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
      const fetchRepos = async () => {
        try {
          const response = await fetch("https://api.github.com/users/Minadarabi/repos");
          if (!response.ok) {
            throw new Error("Network response was not ok" + response.statusText);
          }
          const data = await response.json();
          setRepos(data);
        } catch (error) {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        }
      };
    
      fetchRepos();
    }, []);
    console.log(repos)
    console.log(repoImages)
  


  return (
    <div className='projects'>
    <h1>Featured Projects</h1>
    <ul>
      {repos.map((repo) => {
        const repoImage = repoImages.find((img) => img.repoName === repo.name);
        return (
          <li key={repo.id} className='list-item'>
            <img className='repo-img' src={repoImage?.imageUrl} alt={repo.name} />
            <h2 className='repo-name'>{repo.name}</h2>
            <p className='repo-text'>{repoImage?.desc}</p>
            <div>
            <Tag color="black" content="HTML5" />
            <Tag color="black" content="CSS3" />
            <Tag color="black" content="JavaScript" />
            <Tag color="black" content="React" />

            </div>
            <div className='btns'>
            <Button color={"blue"} icon={"globe"} text={"Live Demo"}/>
            <Button color={"pink"} icon={"github"} text={"View the Code"}/>

            </div>
            
           
          </li>
          
        );
      })}
    </ul>
  </div>
  )
}
