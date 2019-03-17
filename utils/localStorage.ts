const LOCAL_STATE = 'state';
export const loadState = () => {
  try {
    const serializeState = localStorage.getItem(LOCAL_STATE);
    return JSON.parse(serializeState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STATE, serializeState);
  } catch (err) {
    console.error(`Unable to save state to storage`, err);
  }
};
