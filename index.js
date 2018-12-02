const cp = require("child_process")

function comando(command){
    cp.exec(command, (err, stdout, stderr)=>{
        if(err){
            console.log(`Error: ${err}`)
            return
        }
        if(stdout) console.log(`Standard out: \n ${stdout}`)
        if(stderr) console.log(`Standard err: \n ${stderr}`)
    })
}

//comando("ls");
comando("npm install")
//comando("node ./src/script --base=5")