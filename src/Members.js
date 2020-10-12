import React, { useState, useEffect } from 'react';
import {fetchMembers} from './github_api';
import MemberModal from './MemberModal';
import ReposModal from './ReposModal';
import FollowButton from './FollowButton';


export default function Members(){
    const [members, setMembers] = useState([])
    const [memberUrl, setMemberUrl] = useState()
    const [repoUrl, setRepoUrl] = useState()
    const [isMemberShown, setIsMemberShown] = useState(false)
    const [isReposShown, setIsReposShown] = useState(false) 
    useEffect(() => {
        fetchMembers().then(
        (m) => {
          setMembers(m);
        })
    }, []);
    function showMember(event){
        if(event.target.value){
            setMemberUrl(event.target.value)
        }else{
            setMemberUrl(event.target.alt)
        }
        setIsMemberShown(true);
    }
    
    function hideMember() {
        setIsMemberShown(false);
    }
    function showRepos(event){
        setRepoUrl(event.target.value)
        setIsReposShown(true);
    }
    
    function hideRepos() {
        setIsReposShown(false);
    }
    
    return(
        <>
        {isMemberShown && <MemberModal onClose={hideMember} member = {memberUrl}/>}
        {isReposShown && <ReposModal onClose={hideRepos} repo = {repoUrl}/>}
        <ul className = "list-group mt-5">
            {members.map((member) => {
                return(
                <li key = {member.url} className="list-group-item">
                    <div className = "row">
                        <div className = "col-4">
                        </div>
                        <div className="col-4" >
                                <img src={member.avatar_url} className="rounded mr-3" alt={member.url} onClick={showMember}></img>
                                <FollowButton memberID = {member.id}/>
                        </div>
                        <div className="col-4 ">
                            <div>
                                <button className="btn btn-outline-danger mb-4" value={member.url} onClick={showMember}>{member.login}</button>
                            </div>
                            <div>
                                <button className="btn btn-danger text-white" value={member.repos_url} onClick={showRepos}>Repos</button>
                            </div>

                        </div>
                    </div> 
              </li>);
            })}
        </ul>
        </>
    );
}