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
        renderCats();
    };

    this.wakeUp = function() {
        this.isSleeping = false;
        renderCats();
    };
}

const cats = [
    new Cat("Британська", 3, "Самець", "Сірий", "Барон", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriVGdSupx--4na8SVQLyMWtuhyhJ-u2uqJA&s.jpg"),
    new Cat("Сіамська", 2, "Самка", "Кремовий", "Сіма", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp54IGsKgW8Ev-pQdiXMmonDo9GoqAyehpcZBpCVWEbCxwmAMbpctqfhVC6VV08liLJPRXzuyyOj_Sc4qSpJiTAKmH6gA2dD3WWVO5ShE6&s=10.jpg"),
    new Cat("Мейн-кун", 4, "Самець", "Рудий", "Рижик", "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg")
];

function renderCats() {
    const container = document.getElementById('cat-container');
    container.innerHTML = '';

    cats.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = `cat-card ${cat.isSleeping ? 'sleeping' : ''}`;
        
        card.innerHTML = `
            <img src="${cat.photoUrl}" alt="${cat.name}">
            <h3>${cat.name}</h3>
            <p>Порода: ${cat.breed}</p>
            <p>Статус: ${cat.isSleeping ? 'Спить' : 'Не спить'}</p>
            <button class="btn-feed" onclick="cats[${index}].askForFood()">Попросити їсти</button>
            <button class="btn-sleep" onclick="cats[${index}].layDownToSleep()">Лягти спати</button>
            <button class="btn-wake" onclick="cats[${index}].wakeUp()">Прокинутися</button>
        `;
        container.appendChild(card);
    });
}

renderCats();