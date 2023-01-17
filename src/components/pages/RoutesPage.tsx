import '@/App.css';
import {NavLink} from 'react-router-dom';

export default function RoutesPage() {
  return (
    <div className="App">
      <h1>📝 Pages</h1>
      <section>
        <h2>Query Form</h2>
        <ul>
          <li>
            <NavLink to="/search-products">Search Products</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <h2>Post Form</h2>
        <ul>
          <li>
            <NavLink to="/sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <h2>Handmade Post Form</h2>
        <ul>
          <li>
            <NavLink to="/sign-in/handmade">Sign In</NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
