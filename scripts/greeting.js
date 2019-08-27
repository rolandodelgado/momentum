const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('js-greetings');
const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();