const loopLimit = 1e9;
module.exports = {
    simulateSync: function(){
        console.log('Comenzando bloqueo simulado sync...');
        for(let i = 0; i <= loopLimit; i += 1) {
            // Simulación para operación intensiva
            //  - Cifrado
            //  - Compresión
            //  - Proceso de datos
            //  - Petición HTTP
            //  - Query a base de datos
            if (i === loopLimit) console.log("He llegado al final sync!");
        }
        console.log('El bucle ha finalizado sync!');
    },
    simulateAsync: function(){
        console.log('Comenzando bloqueo simulado async...');
        setImmediate(()=>{
            for(let i = 0; i <= loopLimit; i += 1) {
                // Simulación para operación intensiva
                //  - Cifrado
                //  - Compresión
                //  - Proceso de datos
                //  - Petición HTTP
                //  - Query a base de datos
                if (i === loopLimit) console.log("He llegado al final async!");
            }
        });
        console.log('El bucle ha finalizado async!');
    }
}