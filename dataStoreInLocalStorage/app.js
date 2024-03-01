function handleSubmitBit(event){
    event.preventDefault();


    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;


    const user = {
        username: username,
        email: email,
        phone: phone,
    };

// Step 1: Retrieve existing user details from local storage
const storedUserDetails = localStorage.getItem("User Details");
const existingUserDetails = storedUserDetails ? JSON.parse(storedUserDetails) : {};



  // Merge new user details with existing details
  // const updatedUserDetails = { ...existingUserDetails, ...user };
  // const updatedUserDetails = Object.assign({}, existingUserDetails, user);
  

  // Store merged user object in local storage with the key "User Details"
  //localStorage.setItem("User Details", JSON.stringify(updatedUserDetails));
  localStorage.setItem("User Details", JSON.stringify(existingUserDetails));

  // Optionally, you can clear the form after submission
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  alert("User details submitted and saved to local storage!");
}

