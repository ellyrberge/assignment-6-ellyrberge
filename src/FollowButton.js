import React, { useState, useEffect } from 'react';
import {fetchFollow, deleteFollow, saveFollow} from './api.js';


export default function FollowButton({memberID}){
    const [followers, setFollowers] = useState([])
    const [isFollowers, setIsFollowers] = useState(false)
    useEffect(() => {
        fetchFollow().then((f) => {
          if(f.length !== 0){
            f.forEach((followers) => {
                if(memberID === Number(followers.followerID)){
                    setIsFollowers(true)
                }
            })
          }
          setFollowers(f)
        })
        
    }, [memberID]);
    function addFollower(event){
        saveFollow({
            followerID: event.target.value,
          }).then((newFollower) => {
              setFollowers(followers.concat(newFollower))
              setIsFollowers(true);
            
        })
    }
    function deleteFollower(event){
        const filteredFollowers = followers.filter((f) => {
            if (f.followerID === event.target.value){
                deleteFollow(f.id).then(() => {
                    setIsFollowers(false)
                });
            }
            return (f.followerID !== event.target.value)
        })
        setFollowers(filteredFollowers)
    }
       
    
    return(
        <>  
            {isFollowers ? (<button type="button" className="btn btn-outline-danger" value={memberID} onClick={deleteFollower}>Unfollow</button>):
            (<button type="button" className="btn btn-outline-danger" value={memberID} onClick={addFollower}>Follow</button>)
            }
        </>
    );
}