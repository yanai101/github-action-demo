const fetch = require('node-fetch');

const run = async ()=>{
    const res = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes');
    const joke= await res.json();
    console.log(`${joke.type} : ${joke.setup}`)
    console.log(`${joke.punchline}`)
}

run()