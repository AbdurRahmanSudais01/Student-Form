function generateRandomID(length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

function setRandomID() {
    const userIdField = document.getElementById('userId');
    userIdField.value = generateRandomID();
}

setRandomID(); // Set a new random ID
document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();
    let usersList = [];
    
    let userId = e.target.userId.value;
    let userFirstName = e.target.firstName.value;
    let userLastName = e.target.lastName.value;
    let userAge = e.target.age.value;
    let userGender = e.target.gender.value;
    let userEmail = e.target.email.value;
    let userContact = e.target.contact.value;
    let userAddress = e.target.address.value;
    
    // Create a new div for each submission
    let newDiv = document.createElement("div");
    newDiv.className = "formSubmitted";
    
    // Create a new user object
    let user = new User(userId, userFirstName, userLastName, userAge, userGender, userEmail, userContact, userAddress);
    
    newDiv.innerHTML = `
    <button id="deleteData" onclick="this.parentElement.remove()">Delete</button>
    <h1>Form Submitted</h1>
    <p><strong>Id:</strong> ${user.id}</p>
    <p><strong>First Name:</strong> ${user.firstName}</p>
    <p><strong>Last Name:</strong> ${user.lastName}</p>
    <p><strong>Age:</strong> ${user.age}</p>
    <p><strong>Gender:</strong> ${user.gender}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Contact:</strong> ${user.contact}</p>
    <p><strong>Address:</strong> ${user.address}</p>`;
    
    document.body.appendChild(newDiv);
    usersList.push(user);
    
    e.target.firstName.value = '';
    e.target.lastName.value = '';
    e.target.age.value = '';
    e.target.gender.value = '';
    e.target.email.value = '';
    e.target.contact.value = '';
    e.target.address.value = '';
    
    setRandomID(); // Set a new random ID on form submission
});
function User(id, firstName, lastName, age, gender, email, contact, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender; 
    this.email = email;
    this.contact = contact; 
    this.address = address;
 
};   
