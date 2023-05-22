import { graphql } from '@octokit/graphql';

const gql = graphql.defaults({
  headers: {
    authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}`,
  },
});

export async function getRepo(repoFullName)  {
  const [owner, repo] = repoFullName.split('/')

  const { repository } = await gql(`
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

  return repository;
}
