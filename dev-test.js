const Block = require('./block');
const block = new Block('foo','bar','zoo','baz');
console.log(block.toString())
console.log(Block.genesis().toString());
const fooblock = Block.mineBlock(Block.genesis(),'foo');
console.log(fooblock.toString()); 