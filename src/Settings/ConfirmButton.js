import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
const ConfirmButton = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
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
