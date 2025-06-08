const form = document.getElementById('entry-form');
const nameInput = document.getElementById('name');
const positionInput = document.getElementById('position');
const tableBody = document.querySelector('#employee-table tbody');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const position = positionInput.value.trim();

    if (name && position) {
        const row = document.createElement('tr');

        row.innerHTML = `
         <td>${name}</td>
         <td>${position}</td>
         <td><button class="delete-btn">Delete</button></td>
        `;