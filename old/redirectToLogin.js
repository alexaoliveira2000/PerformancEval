const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (!urlParams.has("username")) {
    window.location.href = "./login.html";
}