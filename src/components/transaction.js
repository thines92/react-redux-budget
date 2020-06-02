import React from 'react'

class Transaction extends React.Component {

    render() {
        const { type, source } = this.props.transaction;

        return (
            <tr>
                <td datalabel="type">{type}</td>
                <td datalabel="source">{source}</td>
                <td datalabel="delete"><button className="ui button delete">Delete</button></td>
            </tr>
        )
    }
}

export default Transaction;