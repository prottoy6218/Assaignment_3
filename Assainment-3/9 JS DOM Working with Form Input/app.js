const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// show error message

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

// Event listeners

form.addEventListener('submit', function(e){
    e.preventDefault();


    //Username
    if(username.value === ''){
        showError(username, 'Username is requiered');
    }
    else if(!username.value.match(/^[A-Za-z]+$/)){
        showError(username, 'Username is not valid');
    }
    else if(username.value.length < 3){
        showError(username, 'Username length must be greater then 3 characterss');
    }
    else{
        showSuccess(username);
    }


    // Email
    if(email.value === ''){
        showError(email, 'Email is requiered');
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        showError(email, 'Email is not valid');
    }
    else{
        showSuccess(email);
    }


    //Password
    if(password.value === ''){
        showError(password, 'Password is requiered')
    }
    else if(!password.value.match(/^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/)){
        showError(password, 'Enter at least one uppercase, lowercase, special character, number, and a minimum of 8 characters');
    }
    else{
        showSuccess(password)
    }


    //Confirm Password
    if(password2.value === ''){
        showError(password2, 'Confirm password is requiered');
    }
    else if(password.value !== password2.value){
        showError(password2, 'password are not same')
    }
    else if(!password.value === password2.value){
        showError(password2, 'password match')
    }
    else{
        showSuccess(password2)
    }
})
