import '@/App.css';
import {NavLink} from 'react-router-dom';

interface GithubRepositoryPath {
  owner: string;
  repo: string;
}

const indexingGithubRepositoryPaths: Array<GithubRepositoryPath> = [
  {
    owner: 'facebook',
    repo: 'react',
  },
  {
    owner: 'react-hook-form',
    repo: 'react-hook-form',
  },
];

export default function GithubRepositoriesPage() {
  return (
    <div className="App">
      <h1>Root</h1>
      <ul>
        {indexingGithubRepositoryPaths.map(({owner, repo}) => (
          <li key={repo}>
            <NavLink to={`/issues/${owner}/${repo}`}>{repo} Issues</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
