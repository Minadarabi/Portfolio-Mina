
import { useEffect,useState } from 'react'
import repoImages from "../repo.json"
import { Tag } from './Tag';
import { Button } from './Button';

export const GithubRepos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
      const fetchRepos = async () => {
        try {
          const response = await fetch("https://api.github.com/users/Minadarabi/repos", {
            headers: {
                "Authorization": "Bearer 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"
            }
          });
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
          <li key={repo.id}>
            <img className='repo-img' src={repoImage?.imageUrl} alt={repo.name} />
            <h2>{repo.name}</h2>
            <p>{repoImage?.desc}</p>
            <Tag color="black" content="HTML5" />
            <Tag color="black" content="CSS3" />
            <Tag color="black" content="JavaScript" />
            <Tag color="black" content="React" />
            <Button color={"blue"} icon={"globe"} text={"Live Demo"}/>
            <Button color={"pink"} icon={"github"} text={"View the Code"}/>
          </li>
          
        );
      })}
    </ul>
  </div>
  )
}
