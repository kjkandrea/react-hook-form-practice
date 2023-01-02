import {useQuery} from 'react-query';
import {octoHttp} from '@/infrastructure/octoHttp';

export const useIssuesQuery = () =>
  useQuery(['issues'], () =>
    octoHttp
      .request('GET /repos/{owner}/{repo}/issues', {
        owner: 'octocat',
        repo: 'Spoon-Knife',
      })
      .then(({data}) => data)
  );
