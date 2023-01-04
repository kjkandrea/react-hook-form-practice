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

export default function RoutesPage() {
  return (
    <div className="App">
      <section>
        <h2>🌏 Exploring GitHub Repository Issues</h2>
        <ul>
          {githubRepositoryPaths.map(({owner, repo}) => (
            <li key={repo}>
              <NavLink to={`/issues/${owner}/${repo}`}>{repo} Issues</NavLink>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>📝 Other Pages</h2>
        <ul>
          <li>
            <NavLink to="/sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
