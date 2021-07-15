let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(express.static('assets'));
let request = require('request');
app.use(bodyParser.json());
let cheerio = require('cheerio');
const https = require('https');


app.use(bodyParser.urlencoded({useNewUrlParser: true}));


app.get('/countdown', (req, res) => {
res.render('countdown.ejs')
}); 

app.post('/word-request', (req, res) => {
    console.log('request received for ')
    console.log(req.body)
    var parsedData = req.body.word
    console.log(parsedData)
    request('https://www.allscrabblewords.com/unscramble/' + parsedData, (error, response, body) => {
        // if (err) {console.log(err)}
         if(response.statusCode === 200) {
            console.log(" ALLL OK WITH STATUS")
                const $ = cheerio.load(body);
                var wordHolder =[];
               $('.list-inline').children('li').each((i, word) => {
                    console.log($(word).text())
                    wordHolder.push($(word).text());               
                });
                console.log("The array of words begins: " + wordHolder + "Array finished.")
                res.send(wordHolder)       
        }
        })


})


app.listen(3000, () => console.log(`Example app listening on port 3000!`))



// SORT INTO ARRAYS        
        // for each loop to check innerhtml[i] length (if or switch function) 
        // pushing pushing into relevant array for each - if [i].length == longestWordLength / (arr)WordMinusOne.push(i), etc.
        
        //Create object from arrays (how to use only arrays only if they have a value?)
        // Convert to JSON
        // push to ejs


        // consider find the longest word (will need to iterate using loop), saving length as variable to be used as limit in loop,
        // then setting each array for words as if(word.length == maxLength - 1, push into array wordLength - 1, 2, etc.)

// Previous dictionary used - 'https://wordfinder.yourdictionary.com/unscramble/'