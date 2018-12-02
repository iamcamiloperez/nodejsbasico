const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const q = [
    "Nombre: ",
    "Apellido: ",
    "Edad: "
]

const askQuestion = (rl, question) => {
    return new Promise((resolve, rej)=>{
        rl.question(question, answer=>{
            resolve(answer)
        })
    })
}

const Ask = function(questions){
    return new Promise(async resolve => {
        let results = [];
        for (let i = 0; i < questions.length; i++) {
            const result = await askQuestion(rl, questions[i])            
            results.push(result)
        }
        rl.close();
        resolve(results)
    })
}


Ask(q)
    .then(q => {
        console.log(`Nombre: ${q[0]} ${q[1]}`)
    });
