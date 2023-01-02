import '@/App.css';
import {useIssuesQuery} from '@/hooks/queries/issue';

function App() {
  const {data: issues} = useIssuesQuery();

  return (
    <div className="App">
      <h1>issues</h1>
      <ul>
        {issues?.map(issue => {
          return (
            <li key={issue.id}>
              <h2>{issue.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
