let menuList = document.getElementById("menu-list");
let menuBar = document.getElementById("menu-bar");

menuBar.addEventListener("click", ()=>{
    if(menuList.style.display==="flex"){
        menuList.style.display="none";
    }
    else{
        menuList.style.display="flex";
    }

});

