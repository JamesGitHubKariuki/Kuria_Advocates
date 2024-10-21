import React from 'react'
import pm from '../assets/Images/PropertyManagement.mp4';
import ds from '../assets/Images/Dispute.mp4';
import cm from '../assets/Images/capital.mp4';
import cp from '../assets/Images/competition.mp4';
import ct from '../assets/Images/Contract.mp4';
import cs from '../assets/Images/Constitution.mp4';
import dg from '../assets/Images/DataGovernance.mp4';
import cl from '../assets/Images/compliance.mp4';
import el from '../assets/Images/elections.mp4';
import en from '../assets/Images/energy.mp4';
import ev from '../assets/Images/environment.mp4';
import is from '../assets/Images/insurance.mp4';

const PracticesNav = () => {
  return (
    <>
        <div className="jobsnav">
            <div className="row1">
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={pm}
                  alt=''
                  video/>
                  <p>Property Management</p>
                 </div>
                 
                <div className="i2">
                  <video autoPlay muted loop  className='vd'
                  src={ds}
                  alt=''
                  video/>
                  <p>Alternative Dispute Resolution</p>
                </div>
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={cm}
                  alt=''
                  video/>
                 <p>Capital Markets</p>
                </div>
            </div>
            <div className="row2">
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={cp}
                  alt=''
                  video/>
                  <p>Competition & International Trade Law</p>
                 </div>
                 
                <div className="i2">
                  <video autoPlay muted loop  className='vd'
                  src={ct}
                  alt=''
                  video/>
                  <p>Contract Law</p>
                </div>
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={cs}
                  alt=''
                  video/>
                 <p>Constitutional and Administrative Law</p>
                </div>
            </div>
            <div className="row3">
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={dg}
                  alt=''
                  video/>
                  <p>Data Governance and Privacy</p>
                 </div>
                 
                <div className="i2">
                  <video autoPlay muted loop  className='vd'
                  src={cl}
                  alt=''
                  video/>
                  <p>Corporate Governance, Legal and Compliance<br></br> Audits</p>
                </div>
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={el}
                  alt=''
                  video/>
                 <p>Elections Law</p>
                </div>
            </div>
            <div className="row4">
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={en}
                  alt=''
                  video/>
                  <p>Energy Law</p>
                 </div>
                 
                <div className="i2">
                  <video autoPlay muted loop  className='vd'
                  src={ev}
                  alt=''
                  video/>
                  <p>Environment Law</p>
                </div>
                <div className="i1">
                  <video autoPlay muted loop  className='vd'
                  src={is}
                  alt=''
                  video/>
                 <p>Insurance Law</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default PracticesNav