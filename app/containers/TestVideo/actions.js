/*
 *
 * TestVideo actions
 *
 */

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

export function hoverSeek(bool) {
  return {
    type: HOVER_SEEK,
    bool,
  };
}

export function updateSeek(evt) {
  return {
    type: UPDATE_SEEK,
    evt,
  };
}
export function hoverVideo(bool) {
  return {
    type: HOVER_VIDEO,
    bool,
  };
}
export function playVideo(bool) {
  return {
    type: PLAY_VIDEO,
    bool,
  };
}
export function hoverControl(bool) {
  return {
    type: HOVER_CONTROL,
    bool,
  };
}
export function updateInputSeek(payload) {
  return {
    type: UPDATE_INPUT_SEEK,
    payload,
  };
}
export function updateDuration(payload) {
  return {
    type: UPDATE_DURATION,
    payload,
  };
}
export function setPreviewLink(payload) {
  return {
    type: SET_PREVIEW_LINK,
    payload,
  };
}
