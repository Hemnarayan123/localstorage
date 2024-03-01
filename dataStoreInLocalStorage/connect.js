
function handleSubmitBit(event){
  
   const username = event.target.username.value
   const email = event.target.email.value
   const phone = event.target.phone.value


   const user = {
    username: username,
    email: email,
    phone: phone
   }
  
   const storedUserDetails = localStorage.getItem("user Details")
   const existingUserDetails =  storedUserDetails ? JSON.parse(storedUserDetails) : {};

   const updateUserDetails = Object.assign({}, existingUserDetails, user)

   localStorage.setItem("user Details", JSON.stringify(updateUserDetails));

}

