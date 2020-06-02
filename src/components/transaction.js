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
            <tr>
                <td dataLabel="Income">{income}</td>
                <td dataLabel="Source">{source}</td>
            </tr>
        )
    }
}

export default Transaction;