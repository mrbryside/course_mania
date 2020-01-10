import styled from 'styled-components';

const ControlPlayer = styled.div`
  opacity: ${props => (props.opacity ? 1 : 0)};
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  min-width: 360px;
  z-index: 11;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 10;
`;
const PlayerWrapper = styled.div`
  position: relative;
  min-width: 360px;
  width: 100%;
  height: auto;
  cursor: ${props => (props.showCursor ? 'default' : 'none')};
  z-index: 9;
`;
const ControlWrapper = styled.div`
  position: relative;
  min-width: 360px;
  width: 100%;
  height: auto;
  z-index: 9;
  padding-left: 10px;
  padding-right: 10px;
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

const SeekProgress = styled.input`
  flex: 1;
  &:hover {
    cursor: pointer;
  }
  background: linear-gradient(
    to right,
    red 0%,
    red ${props => (props.percent ? `${props.percent}%` : '0%')},
    grey 0%,
    grey ${props => (props.percentLoading ? `${props.percentLoading}%` : '0%')},
    #fff ${props => (props.percent ? `${props.percent}%` : '0%')}
  );
  border-radius: 8px;
  height: 7px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 30px;
    // transform: scale(1.3);
  }
`;

const SecondBlock = styled.div`
  width: auto;
  color: white;
  padding-left: 10px;
  font-weight: bold;
`;

const SeekWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 9;
  display: flex;
  justify-content: center;
`;

const MenuLeft = styled.div`
  flex: 0.3;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
`;

const MenuCenter = styled.div`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuRight = styled.div`
  flex: 0.3;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
`;

const SeekPreview = styled.div`
  position: absolute;
  bottom: 40px;
  width: 20vw;
  opacity: ${props => (props.opacity ? 1 : 0)};
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid black;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const ControlButton = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 22px;
  width: 50px;
  height: 50px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
  &: focus {
    outline: 0;
  }
`;
const PreviewTime = styled.div`
  padding: 5px;
  font-size: 1.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export {
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
};
