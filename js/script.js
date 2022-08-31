'use strict'
function validateForm(){
  var myForm = document.getElementById('form')
  myForm.addEventListener('submit', ()=>{
    console.log("Signup page clicked")
    e.preventDefault()
  })

  //form validation start here
  var fname = document.forms['myForm']['fname'].value
  if (fname == '') {
    //alert('first name empty')
    let fnameError = document.getElementById('fnameerror')
    fnameError.innerHTML = 'Pleas enter a valid First Name'
    document.forms['myForm']['fname'].focus()
    //fnameError.style.color = 'gray'
    return false  
  }

    //lname validation
    const lname = document.forms['myForm']['lname'].value
    if (lname == '') {
      //alert('Last name cannot be empty')
      let lnameError = document.getElementById('lnameerror')
      lnameError.innerHTML = 'Please Provide a valid Last Name'
      document.forms['myForm']['lname'].focus()
        return false
    }
    //age validation

  const phone = document.forms['myForm']['phone'].value
  if (phone == '') {
    //alert('phone cannot be empty')
    let ageerror = document.getElementById('ageerror')
    ageerror.innerHTML = 'Provde a valid phone'
    document.forms['myForm']['phone'].focus()
    return false
  }

  const passwordOne = document.forms['myForm']['password1'].value
  const passwordTwo = document.forms['myForm']['password2'].value

  if (passwordOne.length < 8) {
    let passwordOneError = document.getElementById('pass1error')
    passwordOneError.innerHTML = 'Password must be at least 8 character long'
    document.forms['myForm']['password1'].focus()
    return false
  }
  if (passwordOne == passwordTwo) {
    return true
  } else {
    let passwordTwoError = document.getElementById('pass2error')
    passwordTwoError.innerHTML = 'Password must be match'
    document.forms['myForm']['password2'].focus()
    return false
  }
}


 //validation for login details 

 function loginForm(){
  var login = document.getElementById('loginform')
  login.addEventListener('submit', () => {
    e.preventDefault()
  })

  var username = document.forms['loginForm']['username'].value
  if (username == "") {
    let usernameerror = document.getElementById('usernameerror')
    usernameerror.innerHTML = "Please input a valid user name"
    document.forms['loginForm']['username'].focus()
    console.log(username)
    return false 
    
  }
/*
  var password = document.forms['loginForm']['password'].value
  if  (password.length > 8){
    let passwordError = document.getElementById('passworderror')
    passwordError.innerHTML = "Password must more than 8 characters"
    return false
  }
  else if(password == ""){
    password.innerHTML = "Password cannt be empty"
    return false
  }*/

}
//show more
 //function display(){
  const displays = document.getElementById('display');
  const moreoption = document.getElementById('moreoptions')
  
  displays.addEventListener('click', () => {
    if(moreoption === 'none'){
      moreoption.style.display = 'none'
    }
    else{
      moreoption.style.display = 'block'
    }
  })
  
  //moreoption.style.color = "red"
  
//   displays.addEventListener('click', ()=>{
//       if(moreoption === 'block'){
//         moreoption.style.display = 'none'
//       }
//       else{
//         moreoption.style.display = 'none'
//       }
//     })  
//  }
