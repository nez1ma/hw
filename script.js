const form = document.querySelector('#contact-form');
const contactList = document.querySelector('#contact-list');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
renderContacts();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newContact = {
        name: document.querySelector('#contact-name').value,
        phone: document.querySelector('#contact-phone').value,
        id: document.querySelector('#contact-id').value
    };

    contacts.push(newContact);
    saveAndRender();
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
            <span><strong>ID:</strong> ${contact.id} | <strong>${contact.name}</strong>: ${contact.phone}</span>
            <button class="delete-btn" onclick="deleteContact(${index})">X</button>
        `;
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    saveAndRender();
}