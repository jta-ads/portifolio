let navegar = document.getElementById("menubar")

let menuList = document.getElementById("menubar");
menuList.style.maxHeight = "0px";

function menuBar(){

    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px"
    }else{
        menuList.style.maxHeight = "0px"
    }

}

navegar.addEventListener("click", ()=>{
    menuList.style.maxHeight = "0px";
})