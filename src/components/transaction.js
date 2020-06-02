import React from "react";
import { Field, reduxForm } from "redux-form";

class Transaction extends React.Component {
    editTransaction = (props) => {
        console.log('props', props)
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.props.editTransaction)}>
                <Field name="type" component={this.renderInput} label="Type" />
                <Field
                    name="source"
                    component={this.renderInput}
                    label="Source"
                />
                <button className="ui button primary">Save</button>
            </form>
        );
    };

    renderInput = ({ input, label, meta }) => {
        console.log(label)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    
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
            <tr>
                <td datalabel="type">{type}</td>
                <td datalabel="source">{source}</td>
                <td datalabel="edit">
                    <button className="ui button primary" onClick={this.editTransaction.bind(this, this.props.transaction)}>Edit</button>
                </td>
                <td datalabel="delete">
                    <button
                        className="ui button red"
                        onClick={this.props.deleteTransaction.bind(this, id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default reduxForm({
    form: 'editTransaction'
})(Transaction)

// export default Transaction;
