const fetch = require('node-fetch');
const core = require('@actions/core')

const run = async ()=>{
    const jokeType = core.getInput('type')
    console.log(jokeType)

    const res = await fetch(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes${jokeType? `/${jokeType}`: ''}`);
    const joke= await res.json();
    console.log(`${joke.type} : ${joke.setup}`)
    console.log(`${joke.punchline}`)

    core.setOutput('jokeId' , joke)
}

run()