const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".Home").classList.add("activeLink");
}

if(pageName === "portfolio.html"){
    document.querySelector(".Portfolio").classList.add("activeLink");
}

if(pageName === "about.html"){
    document.querySelector(".About").classList.add("activeLink");
}