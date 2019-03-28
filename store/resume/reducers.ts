import * as constants from './consts';
import {ResumeActions} from './actions';
import {faLessThanEqual} from '@fortawesome/free-solid-svg-icons';

export interface PersonalInfo {
  email: string;
  firstName: string;
  gitHub: string;
  lastName: string;
  mobileNumber: string;
  website: string;
  nationality: string;
}

export interface ResumeState {
  version: string;
  title: string;
  technologies: any[];
  projects: any[];
  personal: PersonalInfo;
  location: {};
  experience: any[];
  education: any[];
  availability: boolean;
  about: any[];
  isLoading: boolean;
}

export const resumeInitialState: ResumeState = {
  version: '',
  title: '',
  technologies: [],
  projects: [],
  personal: null,
  location: {},
  experience: [],
  education: [],
  availability: false,
  about: [],
  isLoading: false,
};

export function resume(
  state: ResumeState = resumeInitialState,
  action: ResumeActions
): ResumeState {
  switch (action.type) {
    case constants.FETCHING_RESUME:
      return {
        ...state,
        isLoading: true,
      };
    case constants.FETCHED_RESUME:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
  }

  return state;
}
