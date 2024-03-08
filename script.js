document.addEventListener('DOMContentLoaded', function() {
    const initialNames = ['Name 1', 'Name 2', 'Name 3']; // Example names
    const list1 = document.getElementById('list1');
    const list2 = document.getElementById('list2');
    
    // Populate initial names
    initialNames.forEach(name => {
        const div = document.createElement('div');
        div.textContent = name;
        div.className = 'name'; // Ensure this class is styled in CSS
        list1.appendChild(div);
    });

    // Make both lists sortable and connected
    new Sortable(list1, {
        group: 'shared', // set both lists to the same group
        animation: 150
    });

    new Sortable(list2, {
        group: 'shared',
        animation: 150
    });

    // Example job roles
    const jobs = ['Photographer', 'Coordinator', 'Greeter'];
    const jobAssignments = document.getElementById('job-assignments');

    // Populate job assignments
    jobs.forEach(job => {
        const div = document.createElement('div');
        div.textContent = job + ': ';
        div.className = 'job'; // Style this as needed
        jobAssignments.appendChild(div);
    });

    document.getElementById('random-assign').addEventListener('click', function() {
        // Simple random assignment logic here
        // For demonstration purposes, this is very basic and may not be fully fair or optimal
        const names = list2.querySelectorAll('.name');
        names.forEach(name => {
            const randomJobIndex = Math.floor(Math.random() * jobs.length);
            const job = jobAssignments.children[randomJobIndex];
            job.textContent += ' ' + name.textContent; // This appends names; you might want to refine this logic
        });
    });
});
