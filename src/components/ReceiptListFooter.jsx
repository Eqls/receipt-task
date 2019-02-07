import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 0 0 20px;
`

const ReceiptListFooter = props => (
  <Container>
    <Total>
      <span>Total:</span>
      <span>{props.totalSum} €</span>
    </Total>
    <button onClick={props.addReceipt}>Add receipt</button>
  </Container>
)

ReceiptListFooter.propTypes = {
  addReceipt: PropTypes.func.isRequired,
  totalSum: PropTypes.number.isRequired
}

export default ReceiptListFooter
