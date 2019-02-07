import React, { Component } from 'react';
import styled from 'styled-components';
import ReceiptList from './containers/ReceiptList';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <ReceiptList />
      </Container>
    );
  }
}

export default App;
