import React, { Component } from 'react';
import styled from 'styled-components';
import ReceiptCard from '../components/ReceiptCard';
import ReceiptListFooter from '../components/ReceiptListFooter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px;
`;

const categories = [
  'Food',
  'Houseware',
  'Entertainment'
];

class ReceiptList extends Component {

  state = {
    totalSum: 0,
    receipts: []
  }

  addReceipt = () => {
    const {receipts} = this.state;
    receipts.push({
      expenses: [],
      sum: 0
    });
    this.setState({
      receipts: [...receipts]
    });
  }

  addExpense = (index) => {
    const {receipts} = this.state;
    receipts[index].expenses.push({
      note: '',
      price: 0
    })
    this.setState({
      receipts: [...receipts]
    });
  }

  calcReceiptSum = receipt => {
    let sum = 0;
    receipt.expenses.map(expense => sum += parseFloat(expense.price));
    return sum;
  }

  calcTotalSum = receipts => {
    let total = 0;
    receipts.map(receipt => total += parseFloat(receipt.sum));
    return total;
  }

  handleExpenseChange = (e, expenseIndex, cardIndex) => {
    const {receipts, totalSum} = this.state;
    let temp_receipts = [...receipts],
        total_sum = totalSum;

    receipts[cardIndex].expenses[expenseIndex][e.target.name] = e.target.value;
    temp_receipts[cardIndex].expenses = [...receipts[cardIndex].expenses];

    if(e.target.name === 'price') {
      temp_receipts[cardIndex].sum = this.calcReceiptSum(temp_receipts[cardIndex])
      total_sum = this.calcTotalSum(temp_receipts);
    }
    
    this.setState({
      totalSum: total_sum,
      receipts: temp_receipts
    });
  }

  render() {
    const {receipts, totalSum} = this.state;
    return (
      <Container>
        {receipts.map((receipt, index) => <ReceiptCard 
                                            key={index}
                                            receipt={receipt} 
                                            cardIndex={index} 
                                            categories={categories}
                                            addExpense={this.addExpense}
                                            handleExpenseChange={this.handleExpenseChange}
                                          />)}
        <ReceiptListFooter totalSum={totalSum} addReceipt={this.addReceipt} />
      </Container>
    );
  }
}

export default ReceiptList;