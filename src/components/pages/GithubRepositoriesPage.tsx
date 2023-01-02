import '@/App.css';
import {NavLink} from 'react-router-dom';

interface GithubRepositoryPath {
  owner: string;
  repo: string;
}

const githubRepositoryPaths: Array<GithubRepositoryPath> = [
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
      <h1>🌏 Exploring GitHub Repository Issues</h1>
      <ul>
        {githubRepositoryPaths.map(({owner, repo}) => (
          <li key={repo}>
            <NavLink to={`/issues/${owner}/${repo}`}>{repo} Issues</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
