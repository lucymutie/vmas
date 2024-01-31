// deno-lint-ignore-file

console.log('Welcome to the login page')
const vlmlogin = document.getElementById('btnlogin');

vlmlogin.onclick = async (ev) =>{
    const erorr = document.querySelector('#errors');
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    if (username.value.length <5){
        ev.preventDefault();
        const text = 'Please enter your username...:)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
        erorr.style.position = "relative";
        erorr.style.top = "-2.3em";
    }
    else if (password.value.length < 10){
        ev.preventDefault();
        const text = 'Please enter your password..:)';
        erorr.innerHTML = text;
        erorr.style.display = "block";
        erorr.style.position = "relative";
        erorr.style.top = "-2.3em";
    }
}