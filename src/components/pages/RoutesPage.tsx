import '@/App.css';
import {NavLink} from 'react-router-dom';

export default function RoutesPage() {
  return (
    <div className="App">
      <section>
        <h2>📝 Pages</h2>
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
