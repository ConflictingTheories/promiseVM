let myCache = [];
let myStack = ["Dawg"];
let myMem = {
    yo:"yo"
};

var vm = require('../promiseVM')({
    cache: myCache,
    stack: myStack
});


// STACK
vm.lsstack();
console.log("push");
vm.push("Hello");
vm.lsstack();
console.log("pop");
vm.pop();
vm.lsstack();


// Memory (HEAP / KEY-VALUE)
vm.store("x01", "yo");
vm.lsmem();

// CACHE 
vm.cache("yo","yo");
vm.lscache();
vm.forget("yo");
vm.lscache();