// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data
async function getJoke() {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random").then(joke =>{
        return joke.json();
    }).then(joke =>{
        joke.forEach(info=>{
            setupDiv.textContent= info.setup;
            punchlineDiv.textContent= info.punchline;
            punchlineBtn.classList.remove('hidden');
            newJokeBtn.classList.add('hidden');
            punchlineDiv.classList.add('hidden');
            punchlineDiv.classList.remove('bubble');
        })
    })
}
//function that provided the puch of the joke
function showpunch(){  
    punchlineDiv.classList.remove('hidden');
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.add('hidden');
    newJokeBtn.classList.remove('hidden');
    
}
//this is the initial joke call
getJoke();
//adding the events to buttons 
punchlineBtn.addEventListener('click',showpunch)
newJokeBtn.addEventListener('click',getJoke)