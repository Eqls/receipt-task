import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const ReceiptCardFooter = props => (
  <Container>
    Total:
    {props.sum} €
  </Container>
);

ReceiptCardFooter.propTypes = {
  sum: PropTypes.number
}

export default ReceiptCardFooter;