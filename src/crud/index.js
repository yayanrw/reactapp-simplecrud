import React, { Component } from "react";
import FormsComponent from "./FormsComponent";
import { NavbarComponent } from "./NavbarComponent";
import { TableComponent } from "./TableComponent";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      id: "",
      nama: "",
      deskripsi: "",
      harga: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananYangSelainDipilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

      this.setState({
        makanans: [
          ...makananYangSelainDipilih,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      id: "",
      nama: "",
      deskripsi: "",
      harga: 0,
    });
  };

  editData = (id) => {
    const makananYangDipilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      id: makananYangDipilih[0].id,
      nama: makananYangDipilih[0].nama,
      deskripsi: makananYangDipilih[0].deskripsi,
      harga: makananYangDipilih[0].harga,
    });
  };

  deleteData = (id) => {
    const makananBaru = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      makanans: makananBaru,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-5">
          <h2>CRUD REACT JS</h2>
          <TableComponent
            makanans={this.state.makanans}
            editData={this.editData}
            deleteData={this.deleteData}
          />
          <FormsComponent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
