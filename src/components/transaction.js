import React from 'react';

class Transaction extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const transactionStyle = {
            display: 'flex',
            justifyContent: 'center',
            width: '50%'
        }
        console.log('this.transaction', this.props.transaction)
        const { income, source, id } = this.props.transaction;

        return (
            <div style={transactionStyle}>
                <p style={{ width: '50%' }}>{income}</p>
                <p style={{ width: '50%' }}>{source}</p>
            </div>
        )
    }
}

export default Transaction;