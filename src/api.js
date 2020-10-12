export function fetchFollow(){
    return fetch('/api/followers').then((response) => {
        return response.json();
    })
       
}

export function deleteFollow(id){
    return fetch(`/api/followers/${id}`, {
        method: "DELETE",
    });
}

export function saveFollow(data){
    return fetch(`/api/followers`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response)=>{
        return response.json();
    })
}