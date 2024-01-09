function run(){
    let menu=document.getElementById("menu");
    let bars=document.getElementById("bar");

    if(menu.style.display !='none'){
        menu.style.display='none' ;
    }else{
        menu.style.display='block';
    }
}

function run2(){
    let searchbar=document.getElementById("searchbar");
    let search=document.getElementById("search");

    if(searchbar.style.display !='none'){
        searchbar.style.display='none' ;
    }else{
       searchbar.style.display='block';
    }
}

function run3(){
    let firstlogin=document.getElementById("firstlogin");
    let user=document.getElementById("user");

    if(firstlogin.style.display !='none'){
       firstlogin.style.display='none' ;
    }else{
       firstlogin.style.display='block';
    }
}


function shopfunc(){
    alert("Please Select the items");
}

function log(){
    alert("Login successfully");
}

function cart(){
    alert("Your product is added to cart");
}

function sub(){
    alert("Thankyou for subscribing our website.")
}