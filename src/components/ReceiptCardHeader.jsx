import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ReceiptCardHeader = props => (
  <Container>
    <select>
      {props.categories.map((cat, index) =>
        <option 
          key={`cat${index}`} 
          value='cat'>
          {cat}
        </option>
      )}
    </select>
    <button onClick={() => props.addExpense(props.cardIndex)}>Add expense</button>
  </Container>
);

ReceiptCardHeader.propTypes = {
  categories: PropTypes.array.isRequired,
  cardIndex: PropTypes.number.isRequired,
  addExpense: PropTypes.func.isRequired
}

export default ReceiptCardHeader