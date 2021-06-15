# **react-native-vault**

A Persistent, Secure, And Local Database For React-Native

<br/>

## **Getting Started**

First you need to install react-native-vault.

> npm install react-native-vault

Then you need to install a few supporting dependencies.

> npm install @react-native-async-storage/async-storage react-native-crypto-js react-native-uuid

Finally, install the necessary pods.

> cd ios && pod install && cd ..

<br/>

Heads up: this usage documentation is pretty complicated. I recommend just following along with this [example](https://github.com/mattperls-code/react-native-vault/blob/master/example/App.js). On the same note, I'm very open to help properly documenting this library.

<br/>

<hr/>

## **Usage (Vaults)**

<br/>

Vaults are how you interact with and create persistent data. They allow you to initialize, set, and get collections (more on collections later).

<br/>

### **Import The Library**

```
import Vault from "react-native-vault";
```

<br/>

### **Creating A Vault**

```
const myVault = new Vault(storageKey, encryptionKey, options);
```

**storageKey**: (*String*) The key async storage will store the vault under. If you are using async storage elsewhere, make sure you do not use the same key provided here. If you provide an invalid storageKey (not a string), storageKey will default to "$VAULT".

**encryptionKey**: (*String*) The encryption key that will be used to encrypt the vault. If you provide an invalid encryptionKey (not a string), encryptionKey will default to "".

**options**: (*Object*) A set of options for how to deal with errors. Options include: onGetStorageError, onSetStorageError, onEncryptionFail, onDecryptionFail. They all expect a function and will default console.warn() if they don't receive one.

<br/>

### **Initializing The Vault's Collections**

```
myVault.initialize(collectionIds).then(() => {
    // Now the collections can be accessed

    // You may want to use a react state to keep track
    // of whether the vault has been initialized
});
```

**collectionIds**: (*Array&lt;String&gt;*) The names of the collections being initialized.

This method will initialize all the storage collections. For each collectionId, if it does not exist already in the app's persistent storage, an empty collection will be created.

Note that this function should *always* be called **before trying to access a collection** and **after resetting the vault**.

<br/>

### **Resetting The Vault**

```
myVault.reset().then(() => {
    // Now the vault has been reset

    // The collections have been removed from
    // persistent storage and can no longer be accessed
});
```

This method will reset the vault completely. **Do not use this as a way to reset a specific collection**, there are other ways to do that.

Note that you *must* initialize the vault again after calling this method, or else the collections will be inaccessible.

Unless there is a very specific reason, **this method should only be used in development**.

<br/>

### **Getting The Data From A Collection**

```
myVault.getCollectionData(collectionId).then(data => {
    // Do something with the data
});
```

or

```
myVault.getCollection(collectionId).then(collection => {
    const data = collection.data;
    // Do something with the data
});
```

**collectionId**: (*String*) The id of the collection you are retrieving data from.

The getCollectionData method will output the raw json stored in the collection. Note that the data it returns is static and **will not update when the actual collection is changed**.

The getCollection method will output a collection instance (collections are documented below). Note that collections along with their data are **pseudo dynamic** (more info below).

<br/>

## **Setting A Collection's Data Through Vault**

```
myVault.setCollection(collectionId, value).then(() => {
    // The collection is now set
});
```

**collectionId**: (*String*) The id of the collection you are setting.

This method can directly set the stored collection. This will update the persistently stored data. Note that this method is meant to be used internally, and **updating collections should be done through a collection instance instead**.

<br/>

<hr/>

## **Usage (Collections)**

<br/>

Collections allow you to interact with persistently stored arrays of objects. They are the most effective way to get, set, update, remove, and filter the vaults data.

Note that all entries within the data of collections will be assigned a unique id under the property "uuid". This property can be overwritten of assigned on creation, but this is not recommended.

Additionally, collections are **pseudo dynamic**, which means as long as the collection is not changed **through a different collection instance**, the data will be up to date. **If another collection instance or a vault makes changes to the actual stored data, it will not be up to date**.

At a basic level, this means the collections data will be correct if you **only use its methods to update the collection**.

<br/>

### **Getting A Collection Instance**

```
myVault.getCollection(collectionId).then(collection => {
    // Now you can use this collection instance
});
```

or

```
const myCollection = await myVault.getCollection(collectionId); // With async
```

**collectionId**: (*String*) The id of the collection you are retrieving.

This method outputs a collection instance.

<br/>

## Collection Methods

<br/>

### **Directly Setting A Collection**

```
myCollection.set(value).then(() => {
    // New value has been set
});
```

**value**: (*Array*) An array of objects to be stored.

This method sets the data in the collection. **This method will overwrite preexisting data in the collection**.

<br/>

### **Synchronizing The Data**

```
myCollection.syncData().then(() => {
    // The data in this collection instance is now synchronized
});
```

If you are using different collection instances at the same time, use this method to retrieve the most recent data.

<br/>

### **Single Object Interaction Methods**

```
// Adds a new object to collection
myCollection.addOne(value).then(() => {});

// Sets an existing object within collection to a value
myCollection.setOne(test, value).then(() => {});
myCollection.setOneByUuid(uuid, value).then(() => {});

// Merges an existing object within collection with a value
myCollection.updateOne(test, value).then(() => {});
myCollection.updateOneByUuid(uuid, value).then(() => {});

// Remove an object within collection
myCollection.removeOne(test).then(() => {});
myCollection.removeOneByUuid(uuid).then(() => {});

// Find an object within a collection
myCollection.findOne(test).then(data => {});
myCollection.findOneByUuid(uuid).then(data => {});
```

**value**: (*Object*) The value being added, set, or updated.

**test**: (*Function*) A function to be tested on every object within the collection. Should return if the object is a valid target.

**uuid**: (*String*) The uuid of the target object.

**data**: (*Object*) The data returned by finder methods from persistent storage.

<br/>

### **Multiple Object Interaction Methods**

```
// Adds multiple new objects to collection
myCollection.addMultiple(values).then(() => {});

// Sets existing objects within collection to values calculated through valueCallback
myCollection.setMultiple(test, valueCallback).then(() => {});
myCollection.setMultipleByUuid(uuids, valueCallback).then(() => {});

// Merges existing objects within collection with values calculated through valueCallback
myCollection.updateMultiple(test, valueCallback).then(() => {});
myCollection.updateMultipleByUuid(uuids, valueCallback).then(() => {});

// Removes objects within collection
myCollection.removeMultiple(test).then(() => {});
myCollection.removeMultipleByUuid(uuids).then(() => {});

// Finds objects within collection
myCollection.findMultiple(test).then(data => {});
myCollection.findMultipleByUuid(uuids).then(data => {});
```

**values**: (*Object*) The values being added.

**test**: (*Function*) A function to be tested on every object within the collection. Should return if the object is a valid target.

**valueCallback**: (*Function*) A function that receives an existing object in the collection and uses that to output what the object should be set to or merged with.

**uuids**: (*Array&lt;String&gt;*) The uuids of the target objects.

**data**: (*Array&lt;Object&gt;*) The data returned by finder methods from persistent storage.
