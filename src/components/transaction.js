import React from "react";
import EditTransaction from "./EditTransaction";

class Transaction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditting: false,
        };
    }
    setEditState = (transaction) => {
        this.setState({ isEditting: true })
    };

    setViewState = () => {
        this.setState({ isEditting: false })
    }

    renderRow() {
        const { id, type, source } = this.props.transaction;

        return (
            <div className="row">
                <div className="six wide column">{type}</div>
                <div className="six wide column">{source}</div>
                <div className="two wide column">
                    <button
                        className="ui button primary"
                        onClick={this.setEditState}
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
        return <EditTransaction editTransaction={this.props.editTransaction} transaction={transaction} setViewState={this.setViewState} />
    }

    renderContent() {
        return !this.state.isEditting ? this.renderRow() : this.renderEdit(this.props.transaction)
    }

    render() {
        return (
            <div className="twelve wide column">
                {this.renderContent()}
            </div>
        );
    }
}

export default Transaction;
