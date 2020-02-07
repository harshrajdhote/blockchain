const SHA256 = require('crypto-js/sha256')
class Block{
	constructor(timestamp,lasthash,hash,data){
          this.timestamp = timestamp;
          this.lasthash = lasthash;
          this.data = data;
          this.hash = hash;
	}
	toString(){
		return `
        Block - 
        Timestamp : ${this.timestamp}
        Last Hash : ${this.lasthash.substring(0,10)}
        Hash      : ${this.hash.substring(0,10)}
        Data      : ${this.data}

		`;
	}
	static genesis(){
		return new this('genesis time','------','frde43-sd23ytkl',[]);
	}
	static mineBlock(lastBlock,data){
		const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		const hash = Block.hash(timestamp,lastHash,data);
		return new this(timestamp,lastHash,hash,data)
	}
	static hash(timestamp,lastHash,data){
		return SHA256(`${timestamp}${lastHash}${data}`).toString();
	}
	static blockHash(chain){
		const {timestamp,lastHash,data} = chain;
		return Block.hash(timestamp,lastHash,data)	
	}
}
module.exports = Block