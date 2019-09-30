import * as constants from './consts';
import {ResumeState} from './reducers';

export interface FetchingResume {
  type: constants.FETCHING_RESUME;
}

export interface FetchedResume {
  payload: ResumeState;
  type: constants.FETCHED_RESUME;
}

export type ResumeActions = FetchingResume | FetchedResume;

export const fetchedResume = (resume: ResumeState): FetchedResume => ({
  payload: {...resume},
  type: constants.FETCHED_RESUME,
});

export const fetchingResume = (): FetchingResume => ({
  type: constants.FETCHING_RESUME,
});

export const fetchResume = () => {
  return async (dispatch: any) => {
    dispatch(fetchingResume());

    const resume = await fetch('/static/site/data/resume.json').then(data =>
      data.json()
    );
    console.log(resume);
    dispatch(fetchedResume(resume));
  };
};
