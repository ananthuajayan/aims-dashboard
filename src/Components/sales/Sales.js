import React from 'react';
import Table from 'react-bootstrap/Table';
import './Sales.scss'


const Sales = () => {
  const clientsData = [
    {
      slno: '01',
      clientName: '50000',
      companyName: '5000',
      products: '05/05/2024',
      units: '05/05/2024',
      discounts: '05/05/2024',
      totalAmount: '05/05/2024',
      dateOfSales: '05/05/2024',
      monthlyPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
    {
      slno: '01',
      clientName: '50000',
      companyName: '5000',
      products: '05/05/2024',
      units: '05/05/2024',
      discounts: '05/05/2024',
      totalAmount: '05/05/2024',
      dateOfSales: '05/05/2024',
      monthlyPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
    {
      slno: '01',
      clientName: '50000',
      companyName: '5000',
      products: '05/05/2024',
      units: '05/05/2024',
      discounts: '05/05/2024',
      totalAmount: '05/05/2024',
      dateOfSales: '05/05/2024',
      monthlyPayOut: '05/05/2024',
      paymentDate: '05/05/2024',
    },
  ];
  return (
    <>
    <div className='sub-head'>
        <button >ADD SALES
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>SL NO:</th>
            <th>CLIENT NAME</th>
            <th>COMPANY NAME </th>
            <th>PRODUCT</th>
            <th>UNITS</th>
            <th>BRANCH</th>
            <th>DISCOUNTS</th>
            <th>TOTAL AMOUNT</th>
            <th>DATE OF SALES</th>
            <th>MONTHLY PAYOUT AMOUNT</th>
            <th>MMDOWNLOAD INVOICE</th>

          </tr>
        </thead>
        <tbody>
          {clientsData.map((client, index) => (
            <tr key={index}>
              <td>{client.slno}</td>
              <td>{client.clientName}</td>
              <td>{client.companyName}</td>
              <td>{client.products}</td>
              <td>{client.units}</td>
              <td>{client.discounts}</td>
              <td>{client.totalAmount}</td>
              <td>{client.dateOfSales}</td>
              <td>{client.monthlyPayOut}</td>
              <td>{client.paymentDate}</td>
              <td><i className="fas fa-download"></i></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Sales;
