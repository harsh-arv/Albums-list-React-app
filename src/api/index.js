const  apiUrl='https://jsonplaceholder.typicode.com/albums'
export const data=()=>{
    fetch(apiUrl)
    .then((res) => res.json())
    .then((json)=>console.log(json))

}