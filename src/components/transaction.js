import React from 'react'

class Transaction extends React.Component {

    render() {
        const { id, type, source } = this.props.transaction;

        return (
            <tr>
                <td datalabel="type">{type}</td>
                <td datalabel="source">{source}</td>
                <td datalabel="edit"><button className="ui button primary">Edit</button></td>
                <td datalabel="delete"><button className="ui button red" onClick={this.props.deleteTransaction.bind(this, id)}>Delete</button></td>
            </tr>
        )
    }
}

export default Transaction;