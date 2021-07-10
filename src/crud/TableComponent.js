import React from "react";
import { Button, Table } from "react-bootstrap";

export const TableComponent = ({ makanans, editData, deleteData }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>{makanan.harga}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => editData(makanan.id)}
                >
                  Edit
                </Button>
                <Button
                  className="ml-2"
                  variant="danger"
                  size="sm"
                  onClick={() => deleteData(makanan.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
