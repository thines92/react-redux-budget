import React from 'react'

class Transaction extends React.Component {

    render() {
        const { id, type, source } = this.props.transaction;
        console.log('this.props', this.props)

        return (
            <tr>
                <td datalabel="type">{type}</td>
                <td datalabel="source">{source}</td>
                <td datalabel="delete"><button className="ui button delete" onClick={this.props.deleteTransaction.bind(this, id)}>Delete</button></td>
            </tr>
        )
    }
}

export default Transaction;