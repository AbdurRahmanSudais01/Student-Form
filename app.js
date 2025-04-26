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
setRandomID();
document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();
    
    setRandomID();
    let userId = document.getElementById("userId").value;
    let userFirstName = document.getElementById("firstName").value;
    let userLastName = document.getElementById("lastName").value;
    let userAge = document.getElementById("age").value;
    let userGender = document.getElementById("gender").value;
    let userEmail = document.getElementById("email").value;
    let userContact = document.getElementById("contact").value;
    let userAddress = document.getElementById("address").value;

    // Create a new div for each submission
    let newDiv = document.createElement("div");
    newDiv.className = "formSubmitted";

    // Create a new user object
    let user = new User(userId, userFirstName, userLastName, userAge, userGender, userEmail, userContact, userAddress);

    newDiv.innerHTML = `
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
    console.log(usersList);
    
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
 let usersList = [];
