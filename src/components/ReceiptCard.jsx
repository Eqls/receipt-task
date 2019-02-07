import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { ReceiptCardHeader } from './ReceiptCardHeader';
import ExpenseRow from './ExpenseRow';
import ReceiptCardFooter from './ReceiptCardFooter';

const Container = styled.div`
  display: flex;
  padding: 10px;
  margin:0 0 5px 0;
  background: lightgray;
  border-radius: 3px;
  flex-direction: column;
`;

export const ReceiptCard = props => (
  <Container>
    <ReceiptCardHeader 
      categories={props.categories} 
      cardIndex={props.cardIndex}
      addExpense={props.addExpense}
      />
    {props.receipt.expenses.map((expense, index) => 
      <ExpenseRow 
        key={`exp${index}`}
        expense={expense} 
        expenseIndex={index}
        cardIndex={props.cardIndex}
        handleExpenseChange={props.handleExpenseChange}
        />
      )}
    <ReceiptCardFooter sum={props.receipt.sum} />
  </Container>
);

ReceiptCard.propTypes = {
  categories: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
  cardIndex: PropTypes.number.isRequired,
  receipt: PropTypes.object.isRequired,
  handleExpenseChange: PropTypes.func.isRequired,
  sum: PropTypes.number.isRequired
}

export default ReceiptCard;