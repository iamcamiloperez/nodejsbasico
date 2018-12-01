const add = require("./src/addition")
const simulate = require("./src/intensive")

simulate.simulateAsync();
add.asyncSum(2,4);
simulate.simulateSync();
add.syncSum(1,2);

