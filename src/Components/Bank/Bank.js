import React from 'react';
import Table from 'react-bootstrap/Table';


const Bank = () => {
  const clientsData = [
    {
      slno: '01',
      name: '50000',
      actNumber: '5000',
      ifsc: '05/05/2024',
      bankName: '05/05/2024',
      branch: '05/05/2024',
      wireNumber: '05/05/2024',
      insuranceAmount: '05/05/2024',
      firstPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
    {
      slno: '01',
      name: '50000',
      actNumber: '5000',
      ifsc: '05/05/2024',
      bankName: '05/05/2024',
      branch: '05/05/2024',
      wireNumber: '05/05/2024',
      insuranceAmount: '05/05/2024',
      firstPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
    {
      slno: '01',
      name: '50000',
      actNumber: '5000',
      ifsc: '05/05/2024',
      bankName: '05/05/2024',
      branch: '05/05/2024',
      wireNumber: '05/05/2024',
      insuranceAmount: '05/05/2024',
      firstPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
    {
      slno: '01',
      name: '50000',
      actNumber: '5000',
      ifsc: '05/05/2024',
      bankName: '05/05/2024',
      branch: '05/05/2024',
      wireNumber: '05/05/2024',
      insuranceAmount: '05/05/2024',
      firstPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
    {
      slno: '01',
      name: '50000',
      actNumber: '5000',
      ifsc: '05/05/2024',
      bankName: '05/05/2024',
      branch: '05/05/2024',
      wireNumber: '05/05/2024',
      insuranceAmount: '05/05/2024',
      firstPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
  
   

   
  ];
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
            <th>NAME AS PER BANK</th>
            <th>ACCOUNT NUMBER</th>
            <th>IBAN/IFSCE/ROUTING NO</th>
            <th>NAME OF BANK</th>
            <th>BRANCH</th>
            <th>WIRE NUMBERS</th>
            <th>INSURANCE AMOUNT</th>
            <th>FIRST PAYOUT DATE</th>
            <th>PAYMENT DATE</th>
          </tr>
        </thead>
        <tbody>
          {clientsData.map((client, index) => (
            <tr key={index}>
              <td>{client.slno}</td>
              <td>{client.name}</td>
              <td>{client.actNumber}</td>
              <td>{client.ifsc}</td>
              <td>{client.bankName}</td>
              <td>{client.branch}</td>
              <td>{client.wireNumber}</td>
              <td>{client.insuranceAmount}</td>
              <td>{client.firstPayOut}</td>
              <td>{client.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Bank;
