import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { UPDATE_SEEK } from './constants';
import makeSelectTestVideo from './selectors';
import { setPreviewLink } from './actions';

export function* getPreviewImage() {
  const allState = yield select(makeSelectTestVideo());

  if (
    allState.previewLink !==
    `http://http://194.31.53.133:2000/assets/testclip/frame${
      allState.videoSecond
    }.jpg`
  ) {
    yield put(
      setPreviewLink(
        `http://194.31.53.133:2000/assets/testclip/frame${
          allState.videoSecond
        }.jpg`,
      ),
    );
  }
}

export default function* testVideoSaga() {
  yield takeLatest(UPDATE_SEEK, getPreviewImage);
}
