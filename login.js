var button = document.getElementById("myBtn");
var username = "";
var password = "";
var alert = document.getElementById("alert");
var show = document.getElementById("show");
var hide = document.getElementById("hide");

button.addEventListener("click", display);

function display() {
     username = document.getElementById("username1").value;
     password = document.getElementById("password1").value;
    if (username == "admin" && password == "admin"){
        console.log("go");
        show.classList.remove('hiddenOnLoad');
        hide.classList.add('d-none');
    }else{
        alert.classList.remove('d-none');
  
        setTimeout(() => {
               
                alert.classList.add('d-none');
           
        }, 2000);
    }
  }