const newAccountForm = document.getElementById('new-account-form');
const modal = document.getElementById('modal');
const confirmMessage = document.getElementById('confirm-message');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');
const container =  document.getElementById('container');
const userEmail = document.getElementById('email');
const password = document.getElementById('password');


newAccountForm.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';


    confirmMessage.innerHTML = `Please confirm account creation for <span class="bold">${userEmail.value}</span>`;



});

cancelBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    userEmail.value = '';
    password.value = '';
})

confirmBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    const userEmail = document.getElementById('email').value;
    container.innerHTML = `
    <p>Hello user with email <span class="bold">${userEmail}</span></p>
    <img src="/hello.webp" alt="Hello user">
    `;
})


