import React from "react";
import EditTransaction from "./EditTransaction";

class Transaction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditting: false,
        };
    }
    editTransaction = (props) => {
        return <EditTransaction props={props} />;
    };

    renderInput = ({ input, label, meta }) => {
        console.log(label);
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    render() {
        const { id, type, source } = this.props.transaction;

        return (
            <div className="row">
                <div className="six wide column">{type}</div>
                <div className="six wide column">{source}</div>
                <div className="two wide column">
                    <button
                        className="ui button primary"
                        onClick={this.editTransaction.bind(
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
}

export default Transaction;
