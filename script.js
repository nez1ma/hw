const form = document.getElementById('cookie-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const days = parseInt(document.getElementById('days').value);

    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();

    document.cookie = `name=${name}; ${expires}; path=/`;
    document.cookie = `age=${age}; ${expires}; path=/`;

    location.reload();
});

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const savedName = getCookie("name");
const savedAge = getCookie("age");

if (savedName !== "" && savedAge !== "") {
    document.write(`<h1>Збережені дані:</h1>`);
    document.write(`<p>Ім'я: ${savedName}</p>`);
    document.write(`<p>Вік: ${savedAge}</p>`);
}