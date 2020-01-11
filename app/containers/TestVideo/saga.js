import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import request from 'utils/request';
import { UPDATE_SEEK } from './constants';

import makeSelectTestVideo from './selectors';
import { setPreviewLink } from './actions';

// export function* getPreviewImage() {
//   const allState = yield select(makeSelectTestVideo());

//   if (
//     allState.previewLink !==
//     `http://http://194.31.53.133:2000/assets/testclip/frame${
//       allState.videoSecond
//     }.jpg`
//   ) {
//     yield put(
//       setPreviewLink(
//         `http://194.31.53.133:2000/assets/testclip/frame${
//           allState.videoSecond
//         }.jpg`,
//       ),
//     );
//   }
// }

export function* getImage() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `http://194.31.53.133:2000/getimg`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(setPreviewLink(repos.image));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export default function* testVideoSaga() {
  // yield takeLatest(UPDATE_SEEK, getPreviewImage);
  yield takeLatest(UPDATE_SEEK, getImage);
}
