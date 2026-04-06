const form = document.querySelector('#contact-form');
const contactList = document.querySelector('#contact-list');
const toastContainer = document.querySelector('#toast-container');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
renderContacts();

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#contact-name').value.trim();
    const phone = document.querySelector('#contact-phone').value.trim();
    const id = document.querySelector('#contact-id').value.trim();

    if (!name || !phone || !id) {
        showToast('Помилка: Заповніть всі поля!', 'error');
        return;
    }

    if (contacts.some(c => c.phone === phone)) {
        showToast('Помилка: Такий номер телефону вже існує!', 'error');
        return;
    }

    if (contacts.some(c => c.id === id)) {
        showToast('Помилка: Такий ID вже зайнятий!', 'error');
        return;
    }

    contacts.push({ name, phone, id });
    saveAndRender();
    showToast('Контакт успішно додано!');
    form.reset();
});

function saveAndRender() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
}

function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>ID:</strong> ${contact.id} | ${contact.name}: ${contact.phone}</span>
            <button class="delete-btn" onclick="deleteContact(${index})">X</button>
        `;
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    saveAndRender();
    showToast('Контакт видалено', 'warning');
}