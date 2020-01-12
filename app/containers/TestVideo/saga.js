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
  const requestURL = `http://194.31.53.133/api/image-service`;

  yield delay(500);

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    yield put(setPreviewLink(response.data));
  } catch (err) {
    console.log(err);
    // yield put(repoLoadingError(err));
  }
}

export default function* testVideoSaga() {
  // yield takeLatest(UPDATE_SEEK, getPreviewImage);
  yield takeLatest(UPDATE_SEEK, getImage);
}
