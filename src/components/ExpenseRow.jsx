import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
`;

const Input = styled.input`
  border: 0;
  border-radius: 3px;
  outline: none;
  padding: 5px;
  ${props => 
    props.width && 'width:'+props.width }
`;

const ExpenseRow = props => (
  <Container>
    <Input 
      width='75%'
      type='text'
      name='note' 
      value={props.expense.note}
      onChange={e => props.handleExpenseChange(e, props.expenseIndex, props.cardIndex)}
      />
    <Input 
      width='20%' 
      type='number' 
      name='price' 
      value={props.expense.price}
      onChange={e => props.handleExpenseChange(e, props.expenseIndex, props.cardIndex)}
      />
  </Container>
);

ExpenseRow.propTypes = {
  expense: PropTypes.object.isRequired,
  expenseIndex: PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired,
  handleExpenseChange: PropTypes.func.isRequired
}

export default ExpenseRow;