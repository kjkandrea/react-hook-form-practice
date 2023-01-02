import {useIssuesQuery} from '@/hooks/queries/issue';
import {useParams} from 'react-router-dom';
import IssueSearchForm from '@/components/forms/IssueSearchForm';

export default function IssuesPage() {
  const {owner, repo} = useParams();
  if (!owner || !repo) return null;
  const {data: issues} = useIssuesQuery({owner, repo});

  return (
    <div className="App">
      <h1>issues</h1>
      <IssueSearchForm />
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
