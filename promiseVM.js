const acc = require('./lib/accumulator');
const reg = require('./lib/registrator');
const med = require('./lib/mediator');
const op = require('./lib/operator');
const curry = require('./lib/curry');
const memo = require('./lib/memo');

// Closure (for Memory / Singleton Usage)
var promiseVM = (() => {

    // Cache
    let cache = [];
    // Memory
    let mem = [];
    // Stack
    let stack = [];
    // Central Message bus
    let bus = [];
    // Handlers

    // return new object
    return (options) => {
        // Initialize if Undefined
        options = options ? options : [];
        // Cache
        cache = options.cache ? options.cache : [];
        // Memory
        mem = options.mem ? options.mem : [];
        // Stack
        stack = options.stack ? options.stack : [];
        // Central Message bus
        bus = options.bus ? options.bus : [];
        // Return Object
        return {
            // CACHE
            cache: (val, item) => {
                cache[val] = item
            },
            forget: (val) => {
                cache = cache.splice(cache.indexOf(val), 1);
            },
            // MEM
            store: (addr, item) => {
                mem[addr] = item
            },
            load: (addr) => {
                return mem[addr];
            },
            clear: (addr) => {
                mem = mem.splice(mem.indexOf(addr), 1);
            },
            // STACK
            push: (item) => stack.push(item),
            pop: () => stack.pop(),
            // LIST CONTENTS
            lsstack: () => console.log(stack),
            lsmem: () => console.log(mem),
            lscache: () => console.log(cache),
            lsbus: () => console.log(bus)
        };
    };
})();

module.exports = promiseVM;