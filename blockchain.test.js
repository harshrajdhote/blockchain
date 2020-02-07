const Blockchain = require('./blockchain')
const Block = require('./block')
describe('Blockchain',()=>{
    let bc;
    beforeEach(()=>{
        bc = new Blockchain(); //beacause changes must 
        //persist with the each new test
        
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
});