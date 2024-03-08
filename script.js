document.addEventListener('DOMContentLoaded', function() {
    populateInitialNames();

    // Implement drag and drop functionality here
    // For simplicity, I'm not including it in this initial setup
});

function populateInitialNames() {
    const list1 = document.getElementById('list1');
    const names = ['Name 1', 'Name 2', 'Name 3']; // Example names

    names.forEach(name => {
        const div = document.createElement('div');
        div.className = 'name';
        div.textContent = name;
        list1.appendChild(div);
    });
}
