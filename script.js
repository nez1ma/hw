function Cat(breed, age, gender, color, name, photoUrl) {
    this.breed = breed;
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.name = name;
    this.photoUrl = photoUrl;
    this.isSleeping = false;

    this.askForFood = function() {
        if (this.isSleeping) {
            alert(this.name + " спить і не може просити їсти");
        } else {
            alert(this.name + " просить їсти");
        }
    };

    this.layDownToSleep = function() {
        this.isSleeping = true;
    };

    this.wakeUp = function() {
        this.isSleeping = false;
    };
}

const cats = [
    new Cat("Британська", 3, "male", "Сірий", "Барон", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriVGdSupx--4na8SVQLyMWtuhyhJ-u2uqJA&s.jpg"),
    new Cat("Сіамська", 2, "female", "Кремовий", "Сіма", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp54IGsKgW8Ev-pQdiXMmonDo9GoqAyehpcZBpCVWEbCxwmAMbpctqfhVC6VV08liLJPRXzuyyOj_Sc4qSpJiTAKmH6gA2dD3WWVO5ShE6&s=10.jpg"),
    new Cat("Мейн-кун", 4, "male", "Рудий", "Рижик", "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg")
];

let currentCatIndex = 0;

function render(cat) {
    const display = document.getElementById('cat-display');
    display.innerHTML = `
        <img src="${cat.photoUrl}" alt="${cat.name}">
        <ul>
            <li>Порода: ${cat.breed}</li>
            <li>Вік: ${cat.age}</li>
            <li>Кличка: ${cat.name}</li>
            <li>Стать: ${cat.gender}</li>
            <li>Колір шерстки: ${cat.color}</li>
            <li>Статус: ${cat.isSleeping ? 'спить' : 'не спить'}</li>
        </ul>
        <div class="actions">
            <button id="btn-food">Попросити їсти</button>
            <button id="btn-sleep">Лягти спати</button>
            <button id="btn-wake">Прокинутися</button>
        </div>
    `;

    document.getElementById('btn-food').addEventListener('click', () => handleAction('askForFood'));
    document.getElementById('btn-sleep').addEventListener('click', () => handleAction('layDownToSleep'));
    document.getElementById('btn-wake').addEventListener('click', () => handleAction('wakeUp'));
}

function handleAction(action) {
    cats[currentCatIndex][action]();
    render(cats[currentCatIndex]);
}

function createButtons() {
    const controls = document.getElementById('controls');
    cats.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.innerText = `Cat ${index + 1}`;
        btn.setAttribute('data-id', index);
        btn.addEventListener('click', function() {
            document.querySelectorAll('#controls button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCatIndex = index;
            render(cats[index]);
        });
        controls.appendChild(btn);
    });
}

createButtons();
document.querySelector('#controls button').click();