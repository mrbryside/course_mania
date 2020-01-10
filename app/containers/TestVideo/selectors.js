import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testVideo state domain
 */

const selectTestVideoDomain = state => state.testVideo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestVideo
 */

const makeSelectTestVideo = () =>
  createSelector(
    selectTestVideoDomain,
    substate => substate,
  );

export default makeSelectTestVideo;
export { selectTestVideoDomain };
