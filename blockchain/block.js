const SHA256 = require('crypto-js/sha256')
const {DIFFICULTY} = require('../config');

class Block{
	constructor(timestamp,lasthash,hash,data,nonce){
          this.timestamp = timestamp;
          this.lastHash = lasthash;
          this.data = data;
		  this.hash = hash;
		  this.nonce = nonce
	}
	toString(){
		return `
        Block - 
        Timestamp : ${this.timestamp}
        Last Hash : ${this.lastHash.substring(0,10)}
        Hash      : ${this.hash.substring(0,10)}
		Data      : ${this.data}
		Nonce     : ${this.nonce}

		`;
	}
	static genesis(){
		return new this('genesis time','------','frde43-sd23ytkl',[],0);
	}
	static mineBlock(lastBlock,data){
		let nonce = 0;
		let hash,timestamp;
		//const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		do{
			nonce++;
			timestamp = Date.now();
			
			hash = Block.hash(timestamp,lastHash,data,nonce);
		}while(hash.substring(0,DIFFICULTY) !== '0'.repeat(DIFFICULTY));

		//const hash = Block.hash(timestamp,lastHash,data);
		return new this(timestamp,lastHash,hash,data,nonce);

	}
	static hash(timestamp,lastHash,data,nonce){
		return SHA256(`${timestamp}${lastHash}${data}${nonce}`).toString();
	}
	static blockHash(block){
		const {timestamp,lastHash,data,nonce} = block;
		return Block.hash(timestamp,lastHash,data,nonce)	
	}
}
module.exports = Block