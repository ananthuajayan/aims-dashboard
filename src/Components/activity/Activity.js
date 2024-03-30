import React from 'react';
import './Activity.scss'

const Activity = () => {
  return (
    <>
    <div className="activity-head">
      <h3>Activity Logs</h3>
    </div>
    <div className="date-search">
      <div className='dates'>
      <div className="start-date">
        <h5>From</h5>
        <input type="date" />
      </div>
      <div className="start-date">
        <h5>To</h5>
      <input type="date" />
      </div>
      </div>
      <button>Search</button>
    
    </div>
    </>
  );
}

export default Activity;
