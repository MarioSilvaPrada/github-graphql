import React, { FC } from 'react';
import * as S from './style';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const USERS_QUERY = gql`
  {
    viewer {
      login
    }
  }
`;

const App: FC = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  console.log(loading, error, data);

  return (
    <S.Container>
      <h1>Home</h1>
    </S.Container>
  );
};

export default App;
