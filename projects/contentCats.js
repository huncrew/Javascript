/*
ASYNC / AWAIT API CALL, to print fetch cat API image and console the url.
*/
const apiFetcher = async () => { 
    let response = await fetch("https://thecatapi.com/api/images/get?format=src&type=gif");
    console.log(response.url);
}
apiFetcher();

