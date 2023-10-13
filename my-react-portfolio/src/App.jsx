import { GithubRepos } from "./Components/GithubRepos"
import { PortfolioSec } from "./Components/PortfolioSec"
import { Words } from "./Components/Words"
import { Tech } from "./Components/Tech"
import { Skill } from "./Components/skill"
import { Media } from "./Components/Media"
import { Footer } from "./Components/Footer"




function App() {
  

  return (
  <div>
    <PortfolioSec />
    <Tech />
    <GithubRepos />
    <Words />
    <Skill />
    <Media />
    <Footer />
  </div>
  )
}

export default App
