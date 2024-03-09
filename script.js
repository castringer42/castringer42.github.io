document.addEventListener('DOMContentLoaded', function() {
    // Assume initialNames and jobs are defined as before
    const initialNames = ['Name 1', 'Name 2', 'Name 3']; // Example names
    const list1 = document.getElementById('list1');
    const jobs = ['Photographer', 'Coordinator', 'Greeter'];
    const jobAssignments = document.getElementById('job-assignments');

    // Populate initial names
    initialNames.forEach(name => {
        const div = document.createElement('div');
        div.textContent = name;
        div.className = 'name'; // Ensure this class is styled in CSS
        list1.appendChild(div);
    });

    // Make the initial list sortable
    new Sortable(list1, {
        group: 'names',
        animation: 150
    });

    // Populate job assignments and make them droppable
    jobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job'; // Ensure this has suitable styling

        const nameContainer = document.createElement('div');
        nameContainer.className = 'name-container'; // Style as needed; this will hold the names
        nameContainer.setAttribute('data-id', job); // Useful for identification

        jobDiv.textContent = job + ': ';
        jobDiv.appendChild(nameContainer);

        jobAssignments.appendChild(jobDiv);

        // Make each job a droppable area that only accepts items from the 'names' group
        new Sortable(nameContainer, {
            group: 'names',
            animation: 150,
            sort: false, // Prevent sorting inside the container
            onAdd: function(evt) {
                // Prevent more than two names from being added
                let items = evt.to.children;
                if(items.length > 2) {
                    evt.to.removeChild(evt.item); // Or swap with one of the existing items
                }
            }
        });
    });
});
