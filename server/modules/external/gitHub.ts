import {Resolver, Query} from 'type-graphql';
import fetch from 'node-fetch';
import {GitPinnedRepos} from '../../entity/GitHub';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const GITHUB_KEY = process.env.GIT_API_KEY;

const query = `
query {
  repositoryOwner(login: "anontyro") {
    ... on ProfileOwner {
      pinnedItems(first: 6, types: REPOSITORY) {
				edges{
          node{
            ... on Repository{
              name,
              url,
              descriptionHTML,
              primaryLanguage{
                color,
                name
              },
							isPrivate,
              createdAt,
              updatedAt,
              shortDescriptionHTML,
            }
          }
        }
      }
    }
  }
}
`;

@Resolver()
export class GithubResolver {
  @Query(() => [GitPinnedRepos])
  async githubPinnedRepos(): Promise<any> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${GITHUB_KEY}`,
      },
      body: JSON.stringify({query}),
    };
    const response = await fetch(GITHUB_API_URL, options);
    const responseJson = await response.json();
    const data = responseJson.data.repositoryOwner.pinnedItems.edges;
    let output: any[] = [];
    data.forEach((repo: any) => {
      output.push(repo.node);
    });

    return output;
  }
}
