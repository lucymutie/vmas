// deno-lint-ignore-file
console.log('Welcome to the signup page')
const btn = document.getElementById('btnsign');

const vmabtn = btn.addEventListener('click', (ev)=>{

const erorr = document.querySelector('#errors');
const name = document.querySelector('#first');
const last = document.querySelector('#last');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const password1 = document.querySelector('#password1');
    // erorr.style.display = "block";
    if(name.value.length < 3){
        ev.preventDefault();
        const text = 'Enter Your firstname... :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }
    else if (name.value.length > 20){
        ev.preventDefault();
        const text = 'should be below 20 characters :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }
    else if(last.value.length < 3){
        ev.preventDefault();
        const text = 'Enter your lastname... :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }
    else if (last.value.length > 20){
        ev.preventDefault();
        const text = 'should be below 20 characters :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }
    else if(email.value.length < 5){
        ev.preventDefault();
        const text = 'Enter your your email... :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }
    else if(phone.value.length < 10){
        ev.preventDefault();
        const text = 'Enter your phonumber... :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }
    else if(phone.value.length > 10){
        ev.preventDefault();
        const text = 'should below 10 characters... :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }
    else if(password.value.length < 8){
        ev.preventDefault();
        const text = 'Enter your first@password... :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
    }

    else if(password1.value.length < 8){
        ev.preventDefault();
        const text = 'Confirm your password... :)';
        erorr.innerHTML = text;
        erorr.style.display = "block";

        if(password != password1){
            ev.preventDefault();
            const text = 'your Passwords do not match... :)';
            erorr.innerHTML = text;
            erorr.style.display = "block";
        }
    }
})
