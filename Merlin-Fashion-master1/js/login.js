var user = document.getElementById("kullanıcı adı");
var pass =  document.getElementById("şifre");
var btn = document.querySelector(".login-button");

function checkvalidity(){
        if(user.value == "" || pass.value ==""){
            alert("Lütfen kullanıcı adı ve şifreyi girin ")
        }
    
}

btn.addEventListener("tıkla", checkvalidity)