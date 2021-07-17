const footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerHTML = `
<button type="button" class="button" data-action="deleteAll">Clear all completed<button>
`;

export default footer;