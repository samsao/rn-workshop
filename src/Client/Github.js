import { create } from 'apisauce';

import { convertGitResponse, type GitRepository } from '@mobile/Models/GitRepository';

const api = create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'React-Native',
  },
});

export function getRepositoriesOf(organization: string): Promise<GitRepository[]> {
  return api.get(`/orgs/${organization}/repos`).then((response) => {
    if (!response.ok) {
      throw new Error(response.data.message);
    }
    return response.data.map(convertGitResponse);
  });
}
