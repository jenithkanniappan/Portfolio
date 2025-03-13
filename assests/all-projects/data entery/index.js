// let name=document.querySelector(".name").value;
// let email=document.querySelector(".email").value;
// let phnumber=document.querySelector(".phnumber").value;
// let age=document.querySelector(".age").value;
// let address=document.querySelector(".address").value;
// let button=document.querySelector(".btn").value;
// let nameError = document.querySelector(".nameError");
// let emailError = document.querySelector(".emailError");
// let numberError = document.querySelector(".numberError");
// let ageError = document.querySelector(".ageError");
// let addressError = document.querySelector(".addressError");


// // console.log(address)

// function submit(){
//     // console.log(name.value)
//     // console.log(email.value)
//     // console.log(phnumber.value)
//     // console.log(age.value)
//     // console.log(address.value)
// }
  
document.querySelector(".btn").addEventListener("click", function () {
    let name = document.querySelector(".name").value.trim();
    let email = document.querySelector(".email").value.trim();
    let phone = document.querySelector(".phnumber").value.trim();
    let age = document.querySelector(".age").value.trim();
    let address = document.querySelector(".address").value.trim();

    let nameError = document.querySelector(".nameError");
    let emailError = document.querySelector(".emailError");
    let numberError = document.querySelector(".numberError");
    let ageError = document.querySelector(".ageError");
    let addressError = document.querySelector(".addressError");

    let finalDetails = document.querySelector(".final-details");

// Clear previous error messages
    nameError.style.display = "";
    emailError.style.display = "";
    numberError.style.display = "";
    ageError.style.display = "";
    addressError.style.display = "";
    finalDetails.innerHTML = ""; 
    
// Clear previous result
    let isValid = true;

// Validation checks
    if (name === "") {
        nameError.style.display = "block";
        isValid = false;
    }

    if (email === "") {
        emailError.style.display = "block";
        isValid = false;
    }

    if (phone === "") {
        numberError.style.display = "block";
        isValid = false;
    } 
    if (age === "") {
        ageError.style.display = "block";
        isValid = false;
    }
    if (address === "") {
        addressError.style.display = "block";
        isValid = false;
    }

    // If all inputs are valid, display the final details
    if (isValid) {
        finalDetails.innerHTML = 
            `<h3>Final Details</h3>
            <p><span>Name:</span> ${name}</p>
            <p><span>Email:</span>${email}</p>
            <p><span>Phone:</span> ${phone}</p>
            <p><span>Age:</span> ${age}</p>
            <p><span>Address:</span> ${address}</p>`;
    }
});
