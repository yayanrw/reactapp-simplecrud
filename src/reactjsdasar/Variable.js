import React from 'react'

let harga = 3000

if (true) {
    harga = 400
}


const Variable = () => {
    return (
        <div>
            <h2>Harga = {harga}</h2>
        </div>
    )
}

export default Variable
