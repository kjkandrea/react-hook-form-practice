import {useQuery} from 'react-query';
import {octoHttp} from '@/infrastructure/octoHttp';

export const useIssuesQuery = ({owner, repo}: {owner: string; repo: string}) =>
  useQuery(['issues', owner, repo], () =>
    octoHttp
      .request('GET /repos/{owner}/{repo}/issues', {
        owner,
        repo,
      })
      .then(({data}) => data)
  );
