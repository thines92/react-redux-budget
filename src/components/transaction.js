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
        console.log('this.props', this.props)
        const { income, source, uniq } = this.props;

        return (
            <div key={uniq} style={transactionStyle}>
                <p style={{ width: '50%' }}>{income}</p>
                <p style={{ width: '50%' }}>{source}</p>
            </div>
        )
    }
}

export default Transaction;