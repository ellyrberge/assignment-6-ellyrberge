const headers = {
    Authorization: "token dd5b586f567e1d4967c81032de9fa8ca979a8396",
};
export function fetchMembers(){
    return fetch('https://api.github.com/orgs/netflix/members', {headers}).then((response) => {
        return response.json();
    });
}

export function fetchMember(url){
    return fetch(url, {headers}).then((response) => {
        return response.json();
    });
}
export function fetchRepos(url){
    return fetch(url, {headers}).then((response) => {
        return response.json();

    });
}