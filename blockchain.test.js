const Blockchain = require('./blockchain')
const Block = require('./block')
describe('Blockchain',()=>{
    let bc;
    beforeEach(()=>{
        bc = new Blockchain(); //beacause changes must 
        //persist with the each new test
        bc2 = new Blockchain();
    });
    it('starts with genis block',()=>{
        expect(bc.chain[0]).toEqual(Block.genesis()); //expect takes the value that we wanna check
    })
    //it creates a test
    it('adds a new block',()=>{
        const data = 'foo';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);

    });
    it('validates a valid chain',()=>{
        bc2.addBlock('foo');
        console.log(bc2.chain);
        console.log(bc.chain);
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });
    it('invalidates a chain with a corrupt genesis block',()=>{
        bc2.chain[0].data = 'Bad data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);

    })
});