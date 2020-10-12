import React, { useState, useEffect } from 'react';
import {fetchRepos} from './github_api'
import {createPortal} from "react-dom";

export default function ReposModal({onClose, repo}) {
    const [repos, setRepos] = useState([])
    useEffect(() => {
      fetchRepos(repo).then(
      (r) => {
        setRepos(r)
      })
      
  }, [repo]);

    return createPortal(<>
    
    <div className="modal-backdrop show"></div>
      <div className="modal" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog-scrollable modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">Repos</h5>
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
              <ul className = "list-group row">
              {repos.map((r) => {
                return(
                  <li key = {r.id} className="list-group-item">
                    <a href={r.html_url} target="_blank" rel="noopener noreferrer" className = "text-danger"><h6>{r.name}</h6></a>
                    <p>{r.description}</p>
                  </li>
                );
              })

              }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>, 
    document.getElementById("modal-container")
    );
}