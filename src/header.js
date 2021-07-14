const header = document.createElement('header');
header.classList.add('header');
header.innerHTML = `
<nav class="flex">
    <p>Today's To Do</p>
    <img src="../image/reload.svg" class="svg">
</nav>
`;

export default header;