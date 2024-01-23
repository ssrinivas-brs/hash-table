/** 
 Author : Build Rise Shine 

Created : 2023

Script : Hash Table

Description : Implementation of Hash Table Data Structure

      The HashTable class represents a custom implementation of a hash table data structure in 
      JavaScript. It provides methods to set key-value pairs, retrieve values by keys, and 
      retrieve all keys stored in the hash table. 
      
      The class uses a simple hash function to convert keys into indices within the underlying array 
      (dataMap) for efficient storage and retrieval. The example demonstrates how to create an instance 
      of the HashTable class and use it to store and retrieve key-value pairs.

(c) Copyright by BRS Studio. 
**/

// Hash table class
class HashTable {
  // to store 10 items as default 
  constructor(size = 10) {
    this.dataMap = new Array(size);
  }

  // method called from other methods
  _hash(key) { //receives the key
    let hash = 0;
    for (let i = 0; i < key.length; i++) { //for loop based on the given key 
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length; // datamap is address space
    } 
    return hash; //returns the index based on the size 
  }

  //key and value is passed to this method
  set(key, value) {
    let index = this._hash(key); 
    // if there is not an empty array in that index, only then we create emptry array
    if (!this.dataMap[index]) this.dataMap[index] = []; 

    // push the key value pair
    this.dataMap[index].push([key, value]);
    console.log(`The index for the key "${key}" is ${index}`);
    return this;
  }

  // key is passed to this method
  get(key) {
    let index = this._hash(key); //with the key, we can get the index
    // if no value present at that index then return undefined
    if (this.dataMap[index]) {
      // if value is there, then loop 
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) { 
          const keyValue = this.dataMap[index][i][1];
          console.log(`The value for the key ${key} is ${keyValue}`);
          return keyValue
        }
      }
    }
    return undefined;
  }

  // return the keys in an array
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

// Implementation
let myHashTable = new HashTable();

myHashTable.set("apple", 40);
myHashTable.set("orange", 35);
myHashTable.set("mango", 25);
myHashTable.set("banana", 10);
myHashTable.set("grapes", 50);
myHashTable.set("pineapple", 60);
myHashTable.set("watermelon", 100);
myHashTable.set("lemon", 15);
myHashTable.set("jackfruit", 200);
myHashTable.set("guava", 20);

myHashTable.get('orange')
myHashTable.get('pineapple')
myHashTable.get('jackfruit')


console.log(myHashTable.keys());

console.log(myHashTable);



// Memory block
// 0
// 1
// 2
// 3
// 4 
// 5 [[ "apple", 40], ["orange", 25] ]
// 6
// 7
// 8
// 9
// 10
