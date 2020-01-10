import styled from 'styled-components';

const FlexParent = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  justify-content: ${props => (props.justify ? props.justify : 'unset')};
  align-items: ${props => (props.align ? props.align : 'unset')};
  height: 100%;
`;
const FlexChild = styled.div`
  flex: ${props => (props.ratio ? props.ratio : '1')};
`;

export { FlexParent, FlexChild };
