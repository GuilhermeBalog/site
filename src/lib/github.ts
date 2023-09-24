import { graphql } from '@octokit/graphql';
import { convertRepoToProject } from './convertRepoToProject.js';

const gql = graphql.defaults({
  headers: {
    authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}`,
  },
});

export interface Repository {
  name: string,
  description: string,
  openGraphImageUrl: string,
  homepageUrl: string,
  url: string,
  languages: {
    nodes: {
      name: string,
    }[],
  },
}

export async function getRepo(repoFullName: string)  {
  console.log(`Fetching repo ${repoFullName}`);

  const [owner, repo] = repoFullName.split('/');

  const { repository } = await gql<{repository: Repository}>(`
      query repoCard($owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          name
          description
          openGraphImageUrl
          homepageUrl
          url
          languages(
            first: 5,
            orderBy: {
              field: SIZE,
              direction: DESC
            }
          ) {
            nodes {
              name
            }
          }
        }
      }
  `, { owner, repo });

  console.log(`Done fetching repo ${repoFullName}`);

  const project = convertRepoToProject(repository);

  return project;
}
