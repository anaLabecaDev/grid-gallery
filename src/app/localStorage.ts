import { RootState } from './store';

type StateWhiteList = Array<keyof RootState>;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState, whiteList: StateWhiteList) => {
  try {
    const filteredStoredState = Object.keys(state)
      .filter((key) => whiteList.includes(key as keyof RootState))
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: state[key as keyof RootState],
        });
      }, {});

    const serializedState = JSON.stringify(filteredStoredState);

    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
