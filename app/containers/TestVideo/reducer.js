/* eslint-disable no-case-declarations */
/*
 *
 * TestVideo reducer
 *
 */
import produce from 'immer';
import {
  HOVER_SEEK,
  UPDATE_SEEK,
  HOVER_VIDEO,
  PLAY_VIDEO,
  HOVER_CONTROL,
  UPDATE_INPUT_SEEK,
  UPDATE_DURATION,
  SET_PREVIEW_LINK,
} from './constants';

export const initialState = {
  hoverSeek: false,
  seekPoint: false,
  showControl: false,
  videoPlaying: false,
  hoverControlBool: false,
  hoverPlayer: false,
  inputSeekValue: 0.0,
  playedSeconds: 0.0,
  videoDuration: 0.0,
  videoLoadingValue: 0.0,
  videoSecond: 0,
  secondToEndVideo: false,
  previewLink: undefined,
};

function toHHMMSS(seconds) {
  let h;
  let m;
  let s;
  let result = '';
  // HOURs
  h = Math.floor(seconds / 3600);
  seconds -= h * 3600;
  if (h) {
    result = h < 10 ? `${h}:` : `${h}:`;
  }
  // MINUTEs
  m = Math.floor(seconds / 60);
  seconds -= m * 60;
  result += m < 10 ? `${m}:` : `${m}:`;
  // SECONDs
  s = seconds % 60;
  result += s < 10 ? `0${s}` : s;
  return result;
}

/* eslint-disable default-case, no-param-reassign */
const testVideoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HOVER_SEEK:
        draft.hoverSeek = action.bool;
        break;
      case UPDATE_SEEK:
        const seekInput = document
          .getElementById('seek')
          .getBoundingClientRect();
        const preview = document
          .getElementById('tooltip-span')
          .getBoundingClientRect();
        const e = action.evt;
        draft.seekPoint = toHHMMSS(
          (
            (((e.clientX - e.target.offsetLeft) / e.target.clientWidth) *
              parseFloat(e.target.getAttribute('max')) -
              0.01) *
            draft.videoDuration
          ).toFixed(0),
        );
        draft.videoSecond = (
          (((e.clientX - e.target.offsetLeft) / e.target.clientWidth) *
            parseFloat(e.target.getAttribute('max')) -
            0.0065) *
          draft.videoDuration
        ).toFixed(0);
        if (
          e.clientX - preview.width / 2 >= seekInput.left + window.scrollX &&
          e.clientX + preview.width / 2 <= seekInput.right + window.scrollX
        ) {
          const x = e.clientX - (preview.width / 2 + 15);
          const tooltipSpan = document.getElementById('tooltip-span');
          tooltipSpan.style.left = `${x}px`;
        } else if (
          e.clientX - preview.width / 2 <
          seekInput.left + window.scrollX
        ) {
          const tooltipSpan = document.getElementById('tooltip-span');
          tooltipSpan.style.left = 0;
        } else if (
          e.clientX + preview.width / 2 >
          seekInput.width + window.scrollX
        ) {
          const tooltipSpan = document.getElementById('tooltip-span');
          tooltipSpan.style.left = `${seekInput.width - preview.width}px`;
        }
        break;

      case HOVER_VIDEO:
        if (!draft.hoverControlBool) draft.showControl = action.bool;
        draft.hoverPlayer = action.bool;
        break;
      case PLAY_VIDEO:
        draft.videoPlaying = action.bool;
        break;
      case HOVER_CONTROL:
        draft.hoverControlBool = action.bool;
        break;
      case UPDATE_INPUT_SEEK:
        if (action.payload.target) {
          draft.inputSeekValue = action.payload.target.value;
        } else if (action.payload.playedSeconds) {
          draft.playedSeconds = (
            draft.videoDuration *
            (1 - action.payload.played)
          ).toFixed(0);
          draft.inputSeekValue = action.payload.played;
          draft.videoLoadingValue = action.payload.loaded;
          draft.secondToEndVideo = toHHMMSS(draft.playedSeconds);
        }
        break;
      case UPDATE_DURATION:
        draft.videoDuration = action.payload;
        break;
      case SET_PREVIEW_LINK:
        draft.previewLink = action.payload;
        break;
    }
  });

export default testVideoReducer;
