import React, { Component } from 'react'

export default class Operan extends Component {
    render () {
        const { makanan, gantiMakanan } = this.props

        return (
            <div>
                <h2>Operan state menjadi props: { makanan }</h2>
                <button onClick={() => gantiMakanan('Sop Iga')}>Ganti Makanan</button>
            </div>
        )
    }
}
