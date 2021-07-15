    let vowels = ["a", "e", "i", "o", "u"];
let consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

var vowBtn = document.getElementById("btn1");
var consBtn = document.getElementById("btn2");
var resBtn = document.getElementById("btn3");
var instruct = document.getElementById("instruct");
var lettDis = document.querySelectorAll("td");
var xhtmRequest = document.getElementById("xhtmRequest");
var wordDisplaySection = document.getElementById("wordDisplaySection");

var chosLets = [];
var letterCount = 0;
var sortedArrays = [];


//Function to generate consonant vowel
let consGen = () => {
    if(letterCount <= 8){
        chosLets.push(consonants[Math.floor(Math.random() * consonants.length)]); 
        letterCount++;
        for(i = 0; i < chosLets.length; i++){
           lettDis[i].innerHTML = chosLets[i];
            }
            }
            }  
 
//Function to generate random vowel
let vowelGen = () => {
    if(letterCount <= 8){
        chosLets.push(vowels[Math.floor(Math.random() * vowels.length)]); 
        letterCount++;
        for(i = 0; i < chosLets.length; i++){
           lettDis[i].innerHTML = chosLets[i];
            }
            }
            } 

//Reset
let reset = () => {
    letterCount = 0;
    chosLets.length = 0;
    longestWord = 0;
    sortedArrays = [];
    var deleteWords = document.getElementsByClassName('word-buttons');
    console.log("deleteWords has " + deleteWords.length + " characters")
    for(i = deleteWords.length-1; i >= 0; i--){
        deleteWords[i].remove(deleteWords[i])
    }   

    for(i = 0; i < lettDis.length; i++){
                lettDis[i].innerHTML = " ";                       
        }
         
}


// loop through the array 
//push into array in loop // once that's finished push that array into holder


// if longer longer than longest
// create button and add to element
    // for loop for each word that is equally as long, push into array
        //loop through that array and append to parent array

// convert array to single string 
// set string as value of sing-property object
// convert object to JSON

 let convertData = () => {

        var arrayConvert = chosLets.join("")

    // set string as value of sing-property object
    var yesOb = {word: arrayConvert}

    console.log(yesOb)

    // convert object to JSON

    var jsontest = JSON.stringify(yesOb);

    console.log(jsontest + " successfully converted")
    requestData(jsontest)
 }




let requestData = (jsontest) => new Promise ((resolve, reject) => {
    console.log("RequestData function initiated")
    // convert array to single string 



    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', '/word-request', true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(jsontest);
    
    xmlhttp.onload = ()=> {
            if(xmlhttp.status = !200){
            console.log(err)
        }
        else {
            var JsResp = xmlhttp.responseText;
            console.log("JsResp is " + JsResp)
            var convertToRegObj = JSON.parse(JsResp)
            console.log("convertToReg is " + convertToRegObj)
            resolve(convertToRegObj) 
            // send as promise call below to 'then'
// TRY TO MOVE CODE BELOW OUT OF XTMLREQUEST
        }
        console.log("outer access to convertToRegObj " + convertToRegObj)

    }
}).then((convertToRegObj) => {  
    console.log("THEN code ready" + convertToRegObj)
var wordHolder = []; // took outside loop to ensure initializedt
var curLength = convertToRegObj[0].length;// assuming here that convertToRegObj not empty
for (var i = 0; i < convertToRegObj.length; i++) {

    if (convertToRegObj[i].length === curLength) { // more of the same
      wordHolder.push(convertToRegObj[i]);
    } else { // new block starts
      curLength = convertToRegObj[i].length;
      sortedArrays.push(wordHolder);
      // alert (wordHolder)
      // alert (sortedArrays)
      wordHolder = [];
      wordHolder.push(convertToRegObj[i]);
    }
  }
  sortedArrays.push(wordHolder);// add the last one
  console.log(sortedArrays)
  
  for(i=0; i < sortedArrays.length; i++){
    var ExwordButtons = document.createElement('h3');
    var ExulText = document.createTextNode("Exp" + sortedArrays[i][0].length + " LETTER WORDS")
    ExwordButtons.appendChild(ExulText)


      var wordButtons = document.createElement('ul');
      // assign the above a class then delete this with reset function
      
      var ulText = document.createTextNode(sortedArrays[i][0].length + " LETTER WORDS")
      wordButtons.appendChild(ulText)
      wordButtons.setAttribute('class', 'word-buttons')
      // need to add text
      for(j=0; j < sortedArrays[i].length; j++) {
          var li = document.createElement('li')
          var innerT = document.createTextNode(sortedArrays[i][j]);
          li.appendChild(innerT)
          wordButtons.appendChild(li);
  
      }
      ExwordButtons.appendChild(wordButtons)
      wordDisplaySection.appendChild(ExwordButtons)
      

  }
})







// add reveal button to trigger display with words



vowBtn.addEventListener("click", (vowelGen));
consBtn.addEventListener("click", (consGen));
resBtn.addEventListener("click", (reset));
xhtmRequest.addEventListener('click', (convertData))


// call convert data then call request data then convert

// loop through object keys with if statement 
    // if value not empty create button 
    // buttons innertext will be array[0].length + 'letter words'
        // button needs to addEvent listener that will loop through array and create
        // forEach object.array create element and append to above

        

// for each array create a button with array.length + words
// button will need event listener that, when triggered, will iterate over each word and create an td or text to be displayed

// button only to apply to ul not li





