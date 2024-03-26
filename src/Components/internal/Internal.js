import React from 'react';
import './Internal.scss';
import Table from 'react-bootstrap/Table';

const Internal = () => {
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
              <th>S.NO</th>
              <th>COMPANY NAME</th>
              <th>LOGO</th>
              <th>EMAIL ID</th>
              <th>ADRESS</th>
              <th>SIGN</th>
              <th>SEAL</th>
             
           </tr>
           
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>5000</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>05/05/2024</td>
              <td>05/05/2024</td>
              <td><i className="fas fa-upload"></i></td>
              <td><i className="fas fa-upload"></i></td>
              
            </tr>
          </tbody>
        </Table>
    </>
  );
}

export default Internal;
