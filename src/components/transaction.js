import React from 'react'

class Transaction extends React.Component {

    render() {
        const { type, source } = this.props.transaction;

        return (
            <tr>
                <td datalabel="type">{type}</td>
                <td datalabel="Source">{source}</td>
            </tr>
        )
    }
}

export default Transaction;