//get api testing 

//var url = 'https://www.nellobytesystems.com/APIAirtimeV1.asp?UserID=CK10100404&APIKey=WTEBSWJ51P33BE15I6L8XZ6HKQN08Y36671U301H2A329GY15Q04XLI1M7151CAR&MobileNetwork=01&Amount=100&MobileNumber=08035583068&CallBackURL=https://www.google.com';
// var urlTwo ='https://www.nellobytesystems.com/APIServerIPV1.asp?UserID=CK10100404&APIKey=WTEBSWJ51P33BE15I6L8XZ6HKQN08Y36671U301H2A329GY15Q04XLI1M7151CAR'
// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data))


//get the product in json format 

var url ="https://www.nellobytesystems.com/APIDatabundlePlansV1.asp"
  fetch(url)
  .then((res)=>{
    if(res.ok){
      return res.json()
  }})

  .then((data =>{
    console.log(data)
    console.log(data.MOBILE_NETWORK.MTN)
    var result = data.MOBILE_NETWORK.MTN

    if(result.lenght > 0 ){
      var dataMtn = ""
    }

    //for loop starts here

    result.forEach((mtn) => {
      dataMtn += "<tr>"
      dataMtn += `<td> ${mtn.ID}</td>`
      dataMtn += `<td> ${mtn.PRODUCT_ID}</td>`
      // dataMtn += `<td> ${mtn.ID}</td>`

      "</tr>"
      console.log(result)
    });
    document.getElementById('result').innerHTML =dataMtn
  }))
   


// fetch(url)
// .then((res) => {
//   if (res.ok){
//        return res.json();
//   }
//   else throw new Error(console.error(err))
// })
// .then(data => {
//   console.log(data)
//   displayData(data)


// })

// function displayData(data) {
// //   const MobileNetwork = data.ID[1];
// // console.log(MobileNetwork)

// for (const key in data){
//   console.log(`${key}: ${MOBILE_NETWORK[key]}`)
// }

// //  const drinkId = drinks.idDrink 
// //  document.getElementById('drinkid').innerHTML = drinkId;
// }

// displayData()

// console.log(data)

// Example POST method implementation:
//async function postData(url = 'ttps://www.nellobytesystems.com/APIAirtimeV1.asp?UserID=CK10100404&APIKey=WTEBSWJ51P33BE15I6L8XZ6HKQN08Y36671U301H2A329GY15Q04XLI1M7151CAR&MobileNetwork=01&Amount=100&MobileNumber=08035583068&CallBackURL=https://www.google.com', data = {}) {
  // Default options are marked with *
  //const response = await fetch(url, {
    //method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //mode: 'no-cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
   // credentials: 'same-origin', // include, *same-origin, omit
    //headers: {
      //'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    //},
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  //});
  //console.log(data)
  //return response.json(); // parses JSON response into native JavaScript objects
  
//}

// postData('https://example.com/answer', { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

// https://www.nellobytesystems.com/APIAirtimeV1.asp?UserID=your_userid&APIKey=your_apikey&MobileNetwork=mobilenetwork_code&Amount=order_amount

// &MobileNumber= recipient_mobilenumber&RequestID=request_id&CallBackURL=callback_url

  