let error = document.getElementById("error");
let Form = document.getElementById("form");
const data = {};
function submitHandler(event) {
    event.preventDefault();
    console.log(event.srcElement.length);
    for(let i =0; i<7; i++){
        data[event.srcElement[i].name]= event.srcElement[i].value
        }
        validate(data,event.srcElement);
        if(validate(data,event.srcElement)){
            Form.innerHTML=`<h3>You are successfully registered</h>`;
        }
    
}
function validate(data,form) {
    let username =/^[a-zA-Z0-9]{4,}$/;
    let name = /^[a-zA-Z\ ]+$/;
    let email =/^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-z]{2,6}$/;
    let phone =/^[\d]{10}$/;
    let pass = /^(?=.[a-zA-Z])(?=.[\W])(?=.*[0-9]).{8,}$/;
    if(!username.test(data.username)){
        form[0].style.border="2px solid red";
        error.textContent ="username must contain atleast 4 characters and no special symbols";
        return;
    }else{
        form[0].style.border ="2px solid green";
        error.textContent = "";
    }
    if(!name.test(data.fname)){
        form[1].style.border="2px solid red";
        error.textContent ="first name cannot be empty and donot contain special symbols";
        return;
    }else{
        form[1].style.border ="2px solid green";
        error.textContent = "";
    }
    if(!name.test(data.lname)){
        form[2].style.border="2px solid red";
        error.textContent ="last name cannot be empty and donot contain special symbols";
        return;
    }else{
        form[2].style.border ="2px solid green";
        error.textContent = "";
    }
    if(!email.test(data.email)){
        form[3].style.border="2px solid red";
        error.textContent ="please provide a valid email address";
        return;
    }else{
        form[3].style.border ="2px solid green";
        error.textContent = "";
    }
    if(!phone.test(data.phone)){
        form[4].style.border="2px solid red";
        error.textContent ="please provide a valid phone number";
        return;
    }else{
        form[4].style.border ="2px solid green";
        error.textContent = "";
    }
    if(data.pass.length < 8){
        form[5].style.border="2px solid red";
        error.textContent ="password must be atleast 8 characters long";
        return;
    }else{
        form[5].style.border ="2px solid green";
        error.textContent = "";
    }
    if(!pass.test(data.pass)){
        form[5].style.border="2px solid red";
        error.textContent ="password must contain atleast one uppercase, lowercase, numbers, special symbols";
        return;
    }else{
        form[5].style.border ="2px solid green";
        error.textContent = "";
    }
    if(data.pass !==data.cpass){
        form[6].style.border="2px solid red";
        error.textContent ="password does not match";
        return;
    }else{
        form[6].style.border ="2px solid green";
        error.textContent = "";
    }
    return true;

    
}
