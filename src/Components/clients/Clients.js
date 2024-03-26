import React from 'react';
import './clients.scss';
import Table from 'react-bootstrap/Table';

const clientsData = [
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
  {
    slno: '01',
    contactNo: '50000',
    name: '5000',
    phone: '05/05/2024',
    email: '05/05/2024',
    passport: '05/05/2024',
    contractStartDate: '05/05/2024',
    contractEndDate: '05/05/2024',
    insurance: '05/05/2024',
    lastEdit: '05/05/2024',
  },
 
];

const Clients = () => {
  return (
    <>
      <div className='sub-head'>
        <div className='head-icons'>
          <i className="fas fa-upload"> export</i>
          <i className="fas fa-download">import</i>
        </div>
        <button>ADD USER
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>SL NO:</th>
            <th>CONTRACT NO</th>
            <th>NAME</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL ID</th>
            <th>EMIRATES ID/PASSPORT NO:</th>
            <th>CONTRACT START DATE</th>
            <th>CONTRACT END DATE</th>
            <th>INSURANCE PREMIIUM</th>
            <th>LAST EDIT</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {clientsData.map((client, index) => (
            <tr key={index}>
              <td>{client.slno}</td>
              <td>{client.contactNo}</td>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>{client.passport}</td>
              <td>{client.contractStartDate}</td>
              <td>{client.contractEndDate}</td>
              <td>{client.insurance}</td>
              <td>{client.lastEdit}</td>
              <td><i className="fas fa-edit"></i></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Clients;
