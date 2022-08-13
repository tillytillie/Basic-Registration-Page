/*function add() {
  var table = document.getElementById('table'),
    newRow = table.insertRow(table.lenght),
    cell1 = newRow.insertRow(0),
    cell2 = newRow.insertRow(1),
    cell3 = newRow.insertRow(2)
  fname = document.getElementById('fname').value
  lname = document.getElementById('lname').value
  age = document.getElementById('age').value

  cell1.innerHTML = fname
  cell2.innerHTML = lname
  cell3.innerHTML = age
  //cell1 = newRow.insertRow(0),

  //document.getElementById('learning').addEventListener('click', {})

  document.getElementById('fname').innerHTML = value
  document.getElementById('lname').innerHTML = value
  document.getElementById('age').innerHTML = value

  console.log(fname)
}

let form = document.getElementsByClassName('form')
form.addEventListerner('click', (e) => {
  console.log('form is click')

  e.preventDefault()
})*/

let date = new Date().getFullYear()
console.log(date)

//document.getElementById('date').innerHTML = '<p> welcome here </p>' + date
//document.getElementById('submit').addEventListener('click', function (e) {

//form validation here

function validateForm() {
  var myForm = document.getElementById('form')
  myForm.addEventListener('submit', () => {
    console.log('form was submitted')
  })

  //form validation statrt here

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
