import React from 'react';
import Table from 'react-bootstrap/Table';

const Cheques = () => {
  const clientsData = [
    {
      slno: '01',
      clientName: '50000',
      chequeIssuedDate: '5000',
      chequeDate: '05/05/2024',
      chequecollectionDate: '05/05/2024',
      amount: '05/05/2024',
      typwOfCheque: '05/05/2024',
      chequeNumber: '05/05/2024',
      bankName: '05/05/2024',
    },
    {
      slno: '01',
      clientName: '50000',
      chequeIssuedDate: '5000',
      chequeDate: '05/05/2024',
      chequecollectionDate: '05/05/2024',
      amount: '05/05/2024',
      typwOfCheque: '05/05/2024',
      chequeNumber: '05/05/2024',
      bankName: '05/05/2024',
    },
    {
      slno: '01',
      clientName: '50000',
      chequeIssuedDate: '5000',
      chequeDate: '05/05/2024',
      chequecollectionDate: '05/05/2024',
      amount: '05/05/2024',
      typwOfCheque: '05/05/2024',
      chequeNumber: '05/05/2024',
      bankName: '05/05/2024',
    },
    {
      slno: '01',
      clientName: '50000',
      chequeIssuedDate: '5000',
      chequeDate: '05/05/2024',
      chequecollectionDate: '05/05/2024',
      amount: '05/05/2024',
      typwOfCheque: '05/05/2024',
      chequeNumber: '05/05/2024',
      bankName: '05/05/2024',
    },
    {
      slno: '01',
      clientName: '50000',
      chequeIssuedDate: '5000',
      chequeDate: '05/05/2024',
      chequecollectionDate: '05/05/2024',
      amount: '05/05/2024',
      typwOfCheque: '05/05/2024',
      chequeNumber: '05/05/2024',
      bankName: '05/05/2024',
    },
    {
      slno: '01',
      clientName: '50000',
      chequeIssuedDate: '5000',
      chequeDate: '05/05/2024',
      chequecollectionDate: '05/05/2024',
      amount: '05/05/2024',
      typwOfCheque: '05/05/2024',
      chequeNumber: '05/05/2024',
      bankName: '05/05/2024',
    },
  ];
  return (
    <>
      <div className='sub-head'>
        <div className='head-icons'>
          <i className="fas fa-upload"> export</i>
          <i className="fas fa-download">import</i>
        </div>
      </div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>SL NO:</th>
            <th>CLIENT NAME</th>
            <th>CHECK ISSUED DATE</th>
            <th>CHEQUE DATE</th>
            <th>CHEQUE COLLECTION DATE</th>
            <th>AMOUNT</th>
            <th>TYPE OF CHEQUE</th>
            <th>CHEQUE NUMBER</th>
            <th>BANK NAME</th>
            <th>VIEW DOC</th>
          </tr>
        </thead>
        <tbody>
          {clientsData.map((client, index) => (
            <tr key={index}>
              <td>{client.slno}</td>
              <td>{client.clientName}</td>
              <td>{client.chequeIssuedDate}</td>
              <td>{client.chequeDate}</td>
              <td>{client.chequecollectionDate}</td>
              <td>{client.amount}</td>
              <td>{client.typwOfCheque}</td>
              <td>{client.chequeNumber}</td>
              <td>{client.bankName}</td>
              <td><i className="fas fa-eye"></i></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Cheques;
