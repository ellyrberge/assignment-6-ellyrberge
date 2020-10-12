import React, { useState, useEffect } from 'react';
import {fetchMember} from './github_api'
import {createPortal} from "react-dom";

export default function MemberModal({onClose, member}) {
    const [name, setName] = useState()
    const [company, setCompany] = useState()
    const [bio, setBio] = useState()
    const [followers, setFollowers] = useState()
    const [following, setFollowing] = useState()
    useEffect(() => {
      fetchMember(member).then(
      (m) => {
        setName(m.name);
        setCompany(m.company);
        setBio(m.bio);
        setFollowers(m.followers);
        setFollowing(m.following)

      })
      
  }, [member]);
    return createPortal(<>
    <div className="modal-backdrop show"></div>
      <div className="modal" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger"><span className = "text-dark">Meet </span>{name}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick = {onClose}
                >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className ="d-flex justify-content-between">
                <div>
                  <h6>{bio}</h6>
                  <h6 className="text-danger">{company}</h6>
                </div>
                <div className = "mt-5">
                  <p>Following : <span className="text-danger">{following}</span></p> <br/>
                  <p>Followers : <span className="text-danger">{followers}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>, 
    document.getElementById("modal-container")
    );
}