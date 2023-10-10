import React from 'react';
import './meetTeam.css';

const MeetTeam = () => {
  return (
    <div className='container-fluid'>
      <div className='team-section'>
        <h1 className='text-center team-title'>Meet The Team</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='row'>
            <div className='col-4'>
              <img src='/img/team-ai.png' className='team-img' alt='Team Member 1' />
              <div className='text-team-section'>
                <h3 className='team-name'>Ollie Chaffey</h3>
                <h4 className='team-job'>CEO</h4>
              </div>
            </div>
            <div className='col-4'>
              <img src='/img/team-ai.png' className='team-img' alt='Team Member 2' />
              <div className='text-team-section'>
                <h3 className='team-name'>Emanuel Cooli</h3>
                <h4 className='team-job'>Head of Operations</h4>
              </div>
            </div>
            <div className='col-4'>
              <img src='/img/team-ai.png' className='team-img' alt='Team Member 3' />
              <div className='text-team-section'>
                <h3 className='team-name'>John Harper</h3>
                <h4 className='team-job'>Lead Developer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
