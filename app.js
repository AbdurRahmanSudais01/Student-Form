function generateRandomID(length = 10) {
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

document.getElementById("form").addEventListener('submit', function(e)
{
    e.preventDefault();
    
    setRandomID();
    let userId=document.getElementById("userId").value;
    let userFirstName=document.getElementById("firstName").value;
    let userLastName=document.getElementById("lastName").value;
    let userAge=document.getElementById("age").value;
    let userGender=document.getElementById("gender").value;
    let userEmail=document.getElementById("email").value;
    let userContact=document.getElementById("contact").value;
    let userAddress=document.getElementById("address").value;
    
    let newdiv = document.createElement("div");
    document.childNodes[1].childNodes[2].appendChild(newdiv),
    newdiv.setAttribute("id", "formSubmitted");
    let outputDiv = document.getElementById("formSubmitted");
    outputDiv.innerHTML = `
    <h1>Form Submitted</h1>
    <p><strong>Id:</strong> ${userId}</p>
    <p><strong>First Name:</strong> ${userFirstName}</p>
    <p><strong>Last Name:</strong> ${userLastName}</p>
    <p><strong>Age:</strong> ${userAge}</p>
    <p><strong>Gender:</strong> ${userGender}</p>
    <p><strong>Email:</strong> ${userEmail}</p>
    <p><strong>contact:</strong> ${userContact}</p>
    <p><strong>Address:</strong> ${userAddress}</p>
    `
})




