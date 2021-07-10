import React from 'react'

const makanans = [
    {
        nama: 'Nasi Goreng',
        harga: 10000
    },
    {
        nama: 'Sop Iga',
        harga: 30000
    },
    {
        nama: 'Bebek Goreng',
        harga: 35000
    },
    {
        nama: 'Soto',
        harga: 10000
    },
    {
        nama: 'Lalapan',
        harga: 12000
    }
]

const totalHarga = makanans.reduce((totalHarga, makanan) => {
    return totalHarga + makanan.harga
}, 0)

const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                { 
                    makanans
                    .map((makanan, index) => (
                        <li>{ index+1 }. { makanan.nama } - Harga { makanan.harga }</li>
                    )) 
                }
            </ul>

            <h2>Map Filter &gt; 15000</h2>
            <ul>
                { 
                    makanans
                    .filter((makanan) => makanan.harga > 15000)
                    .map((makanan, index) => (
                        <li>{ index+1 }. { makanan.nama } - Harga { makanan.harga }</li>
                    )) 
                }
            </ul>

            <h3>Total Harga: { totalHarga }</h3>
        </div>
    )
}

export default Map
