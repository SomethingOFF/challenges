document.addEventListener('DOMContentLoaded', function() {
    const peopleList = document.getElementById('people-list');
    const personDetails = document.getElementById('person-details');
    
    const people = [
        {name: "John Doe", street: "123 Main St", city: "Anytown", state: "CA", country: "USA", telephone: "123-456-7890", birthday: "01/01/1990"},
        {name: "Jane Smith", street: "456 Elm St", city: "Othertown", state: "NY", country: "USA", telephone: "987-654-3210", birthday: "02/02/1985"},
        {name: "Alice Johnson", street: "789 Oak St", city: "AnotherTown", state: "TX", country: "USA", telephone: "111-222-3333", birthday: "03/03/1995"}
    ];
    
    // Populate Master View
    people.forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = person.name;
        listItem.setAttribute('data-id', index);
        peopleList.appendChild(listItem);
    });
    
    // Event listener for person selection
    peopleList.addEventListener('click', function(event) {
        const index = event.target.getAttribute('data-id');
        const selectedPerson = people[index];
        
        if (selectedPerson) {
            const detailsHtml = `
                <h2>${selectedPerson.name}</h2>
                <p><strong>Address:</strong> ${selectedPerson.street}, ${selectedPerson.city}, ${selectedPerson.state}, ${selectedPerson.country}</p>
                <p><strong>Telephone:</strong> ${selectedPerson.telephone}</p>
                <p><strong>Birthday:</strong> ${selectedPerson.birthday}</p>
            `;
            
            personDetails.innerHTML = detailsHtml;
        }
    });
});
