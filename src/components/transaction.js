import React from 'react';
import { fetchTransactions, addTransaction } from '../actions/transactionActions'
import { connect } from 'react-redux';

class Transaction extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            income: '',
            source: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.props)
    }

    handleSubmit(event) {
        console.log(this.state);
        console.log(event)
        event.preventDefault();
        addTransaction(event);
    }

    renderTransactions() {
        const transactionStyle = {
            display: 'flex',
            justifyContent: 'center',
            width: '50%'
        }
        
        return this.props.transactions.map((transaction, i) => {
            return (
                <div key={i} style={transactionStyle}>
                    <p style={{ width: '50%' }}>{transaction.income}</p>
                    <p style={{ width: '50%' }}>{transaction.source}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="income" value={this.state.income} onChange={this.handleChange} />
                    <input type="text" name="source" value={this.state.source} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {this.renderTransactions}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
	console.log("mapStatetoProps state: " + JSON.stringify(state));
	return {
		transactions: state.transactions
	};
};

export default connect(
	mapStateToProps,
	{
		fetchTransactions
	}
)(Transaction);