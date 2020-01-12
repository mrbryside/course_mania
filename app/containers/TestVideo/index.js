/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/**
 *
 * TestVideo
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faCog,
  faCompress,
  faWindowRestore,
  faQuestionCircle,
  faVolumeUp,
  faBackward,
  faForward,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTestVideo from './selectors';
import {
  ControlPlayer,
  PlayerWrapper,
  Background,
  MenuLeft,
  MenuCenter,
  MenuRight,
  SeekProgress,
  SeekPreview,
  MenuWrapper,
  ImagePreview,
  ControlButton,
  SeekWrapper,
  ControlWrapper,
  SecondBlock,
  PreviewTime,
} from './styles/styles';
import {
  hoverSeek,
  updateSeek,
  hoverVideo,
  playVideo,
  hoverControl,
  updateInputSeek,
  updateDuration,
} from './actions';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

let time;

export function TestVideo(props) {
  useInjectReducer({ key: 'testVideo', reducer });
  useInjectSaga({ key: 'testVideo', saga });
  useEffect(() => {
    //
  }, []);

  const {
    onPlayVideo,
    onHoverSeek,
    onUpdateSeek,
    onHoverVideo,
    onHoverControl,
    onUpdateInputSeek,
    onUpdateDuration,
  } = props;
  const {
    hoverSeek,
    seekPoint,
    showControl,
    videoPlaying,
    hoverPlayer,
    inputSeekValue,
    videoDuration,
    videoSecond,
    secondToEndVideo,
    videoLoadingValue,
    previewLink,
  } = props.testVideo;
  let playerJa;
  let playerJa2;

  const ref = player => {
    playerJa = player;
  };

  const ref2 = player => {
    playerJa2 = player;
  };

  const a = (value = 0.2) => {
    playerJa.seekTo(value);
  };
  const a2 = (value = 0.2) => {
    playerJa2.seekTo(value);
  };

  const screenful = () => {
    document.getElementById('video').requestFullscreen();
  };

  const logout = () => {
    onHoverVideo(false);
  };

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 4000);
    onHoverVideo(true);
  }

  return (
    <div>
      <Helmet>
        <title>TestVideo</title>
        <meta name="description" content="Description of TestVideo" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <PlayerWrapper
        id="video"
        onMouseEnter={() => {
          resetTimer();
        }}
        onMouseMove={() => {
          resetTimer();
        }}
        showCursor={hoverPlayer}
      >
        <ReactPlayer
          ref={ref2}
          playing={videoPlaying}
          url="http://194.31.53.133:2000/assets/testclip/test.mp4"
          width="100%"
          height="100%"
          muted
          // onSeek={e => console.log('onSeek', e)}
          onProgress={e => onUpdateInputSeek(e)}
          onDuration={duration => onUpdateDuration(duration)}
          onEnded={() => onPlayVideo(!videoPlaying)}
        />
        <ControlPlayer
          opacity={showControl}
          onMouseEnter={() => onHoverControl(true)}
          onMouseLeave={() => onHoverControl(false)}
        >
          <ControlWrapper>
            <SeekWrapper>
              <SeekProgress
                id="seek"
                type="range"
                min={0}
                max={1}
                step="any"
                value={inputSeekValue}
                percent={inputSeekValue * 100}
                percentLoading={videoLoadingValue * 100}
                onMouseEnter={() => onHoverSeek(true)}
                onMouseOut={() => onHoverSeek(false)}
                onChange={evt => {
                  onUpdateInputSeek(evt);
                  a2(evt.target.value);
                }}
                onMouseMove={e => {
                  if (hoverSeek) {
                    onUpdateSeek(e);
                    // a(
                    //   (
                    //     ((e.clientX - e.target.offsetLeft) /
                    //       e.target.clientWidth) *
                    //     parseFloat(e.target.getAttribute('max'))
                    //   ).toFixed(2) - 0.01,
                    // );
                  }
                }}
              />
              <SecondBlock>{secondToEndVideo && secondToEndVideo}</SecondBlock>
              <SeekPreview
                id="tooltip-span"
                opacity={hoverSeek}
                onMouseEnter={() => onHoverControl(false)}
              >
                <ImagePreview>
                  <img
                    src={`data:image/jpeg;base64,${previewLink.data}`}
                    width="100%"
                    height="100%"
                  />
                  <PreviewTime>{seekPoint}</PreviewTime>
                </ImagePreview>
              </SeekPreview>
            </SeekWrapper>
            <MenuWrapper>
              <MenuLeft>
                <ControlButton onClick={() => onPlayVideo(!videoPlaying)}>
                  <FontAwesomeIcon icon={videoPlaying ? faPause : faPlay} />
                </ControlButton>
                <ControlButton>
                  <FontAwesomeIcon icon={faBackward} />
                </ControlButton>
                <ControlButton>
                  <FontAwesomeIcon icon={faForward} />
                </ControlButton>
                <ControlButton>
                  <FontAwesomeIcon icon={faVolumeUp} />
                </ControlButton>
              </MenuLeft>
              <MenuCenter />
              <MenuRight>
                <ControlButton>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </ControlButton>
                <ControlButton>
                  <FontAwesomeIcon icon={faWindowRestore} />
                </ControlButton>
                <ControlButton>
                  <FontAwesomeIcon icon={faCog} />
                </ControlButton>
                <ControlButton onClick={screenful}>
                  <FontAwesomeIcon icon={faCompress} />
                </ControlButton>
              </MenuRight>
            </MenuWrapper>
          </ControlWrapper>
        </ControlPlayer>
        {!videoPlaying && <Background />}
      </PlayerWrapper>
    </div>
  );
}

TestVideo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testVideo: makeSelectTestVideo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onHoverSeek: bool => dispatch(hoverSeek(bool)),
    onHoverVideo: bool => dispatch(hoverVideo(bool)),
    onUpdateSeek: evt => dispatch(updateSeek(evt)),
    onPlayVideo: bool => dispatch(playVideo(bool)),
    onHoverControl: bool => dispatch(hoverControl(bool)),
    onUpdateInputSeek: evt => dispatch(updateInputSeek(evt)),
    onUpdateDuration: duration => dispatch(updateDuration(duration)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TestVideo);
