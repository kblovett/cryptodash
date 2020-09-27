import React from 'react';

import styled from 'styled-components';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

import { AppContext } from '../App/AppProvider';

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
const ConfirmButton = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ confirmFavourites }) => (
        <CenterDiv>
          <ConfirmButton onClick={confirmFavourites}>
            Confirm Favourites
          </ConfirmButton>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
