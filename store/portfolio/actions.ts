import * as constants from './consts';
import {PortfolioState, GithubPortfolio} from './reducers';
import graphQLQuery from '../../components/graphQL/GraphQLWrapper';
import {GITHUB_PORTFOLIO_QUERY} from '../../graphQL/queries/githubQuery';
import get from 'lodash.get';

export interface FetchingPortfolioList {
  type: constants.FETCHING_PORTFOLIO_LIST;
}

export interface FetchedPortfolioList {
  type: constants.FETCHED_PORTFOLIO_LIST;
  payload: PortfolioState;
}

export type PortfolioActions = FetchedPortfolioList | FetchingPortfolioList;

export const fetchingPortfolioList = (): FetchingPortfolioList => ({
  type: constants.FETCHING_PORTFOLIO_LIST,
});

export const fetchedPortfolioList = (
  portfolio: PortfolioState
): FetchedPortfolioList => {
  return {
    payload: {...portfolio},
    type: constants.FETCHED_PORTFOLIO_LIST,
  };
};

export const fetchPortfolioList = (refresh: boolean = false) => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const willUseCachedData =
      state.portfolio.portfolioList.length > 0 && !refresh;
    if (willUseCachedData) {
      return;
    }
    dispatch(fetchingPortfolioList());

    return graphQLQuery({
      query: GITHUB_PORTFOLIO_QUERY,
    }).subscribe({
      next: data => {
        const portfolioList: GithubPortfolio[] = get(
          data,
          'data.githubPinnedRepos',
          []
        );
        const portfolio: PortfolioState = {
          portfolioList,
        };
        dispatch(fetchedPortfolioList(portfolio));
      },
      error: error => {
        console.error(`An error occured with Github portfolio`, error);
      },
      complete: () => console.log('completed getting github porfolio'),
    });
  };
};
