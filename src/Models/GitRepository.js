export type GitRepository = {
  id: number,
  name: string,
  description: string,
  creationDate: string,
  language: string,
};

export function convertGitResponse(gitResponse: any): GitRepository {
  return {
    id: gitResponse.id,
    creationDate: gitResponse.created_at,
    name: gitResponse.name,
    language: gitResponse.language,
    description: gitResponse.description,
  };
}
