import React from 'react';
import './dashboard.scss';
import Table from 'react-bootstrap/Table';
import Piechart from '../Projectpie/piechart';
import Productpie from '../Productpie/productpie';



const Dashboard = () => {
  return (
    <>
      <div className="table-container">
        <Table striped bordered hover variant="light">
          <thead>

        <tr className='double-height'>
          <th>Total number of clients</th>
          <th>Total due amount</th>
        </tr>
           
          </thead>
          <tbody>
            <tr>
              <td>50</td>
              <td>100000</td>
            </tr>


          </tbody>
        </Table>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th colSpan={3}>Next due</th>
            </tr>
            <tr>
              <th>No of clients</th>
              <th>Due amount</th>
              <th>Date of due amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>5000</td>
              <td>05/05/2024</td>
            </tr>


          </tbody>
        </Table>
      </div>
      <div className="pie-container">
        <div className='sub-pie' style={{ borderRight: "1px solid" }}>
          <div className="text-center">Product</div>
          <Productpie />
        </div>
        <div className='sub-pie'>
          <div className="text-center">Project</div>
          <Piechart />
        </div>
        <div className='export-button'>
          <h4>Export</h4>
          <i className="fas fa-download"></i>
        </div>
      </div>
      <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Name</th>
              <th>Project</th>
              <th>Product</th>
              <th>Rental amount due</th>
              <th>Account numbert</th>
              <th>IBAN/IFSC/Routing no</th>
              <th>Name as per bank</th>
              <th>Name of bank</th>
              <th>Branch</th>
              <th>Wire numbers</th>
              <th>Last edit</th>
           </tr>
           
          </thead>
          <tbody>
            <tr>
              <td>Ananthu</td>
              <td>5000</td>
              <td>5000</td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
            </tr>
          </tbody>
        </Table>
    </>
  );
}

export default Dashboard;
