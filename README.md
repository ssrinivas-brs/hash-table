# Hash Table

A Hash Table is a data structure that provides efficient data retrieval and insertion operations. It is also known as a Hash Map or Dictionary in some programming languages. Hash Tables are **based on the concept of hashing**, where data is stored and accessed using a **unique key**. This key is hashed into an index, allowing for constant-time (O(1)) access to elements.

# Hash Table Operations

## Inserting a key-value pair

To insert a key-value pair into a hash table, you need to specify the key and the value. The key is used to generate an index, and the value is stored at the index.

## Retrieving a value given a key

To retrieve a value given a key, you need to specify the key. The hash table will use the key to generate an index, and the value associated with the index will be returned.

## Deleting a key-value pair

To delete a key-value pair from a hash table, you need to specify the key. The hash table will use the key to generate an index, and the key-value pair at the index will be deleted.

## Checking if a key exists

To check if a key exists in a hash table, you need to specify the key. The hash table will use the key to generate an index, and it will return true if the key-value pair exists at the index.

## Iterating over all key-value pairs

To iterate over all key-value pairs in a hash table, you can use a for loop to iterate over the indices of the hash table. For each index, you can then retrieve the key-value pair at the index.