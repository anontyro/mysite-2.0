import * as constants from './consts';
import {PortfolioActions} from './actions';

export interface GithubPortfolio {
  name: string;
  createdAt: Date;
  descriptionHTML?: string;
  isPrivate: boolean;
  primaryLanguage?: {
    color?: string;
    name?: string;
  };
  showDescriptionHTML?: string;
  updatedAt?: string;
  url: string;
}

export interface PortfolioState {
  portfolioList: GithubPortfolio[];
  fetching?: boolean;
}

export const portfolioInitialState: PortfolioState = {
  portfolioList: [],
  fetching: false,
};

export function portfolio(
  state: PortfolioState = portfolioInitialState,
  action: PortfolioActions
): PortfolioState {
  switch (action.type) {
    case constants.FETCHING_PORTFOLIO_LIST:
      return {
        ...state,
        fetching: true,
      };
    case constants.FETCHED_PORTFOLIO_LIST:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      };
  }
  return state;
}
