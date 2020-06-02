import React from "react";
import EditTransaction from "./EditTransaction";

class Transaction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditting: false,
        };
    }
    handleEditTransaction = (transaction) => {
        console.log('transaction', transaction)
        this.setState({ isEditting: true })
        // return <EditTransaction oldTransaction={transaction} />;
    };

    renderRow() {
        const { id, type, source } = this.props.transaction;

        return (
            <div className="row">
                <div className="six wide column">{type}</div>
                <div className="six wide column">{source}</div>
                <div className="two wide column">
                    <button
                        className="ui button primary"
                        onClick={this.handleEditTransaction.bind(
                            this,
                            this.props.transaction
                        )}
                    >
                        Edit
                    </button>
                </div>
                <div className="two wide column">
                    <button
                        className="ui button red"
                        onClick={this.props.deleteTransaction.bind(this, id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    renderEdit(transaction) {
        return <EditTransaction editTransaction={this.handleEditTransaction} transaction={transaction}/>
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div className="twelve wide column">
                {!this.state.isEditting ? this.renderRow() : this.renderEdit(this.props.transaction)}
            </div>
        );
    }
}

export default Transaction;
