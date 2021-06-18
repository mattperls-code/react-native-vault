/*
    © 2021 Matthew Perlman

    react-native-vault v1.0.05
*/

import AsyncStorage from "@react-native-async-storage/async-storage"
import CryptoJS from "react-native-crypto-js"
import uuid from "react-native-uuid"

class Deposit {
    constructor(vault, exists, id, data){
        this.vault = vault
        this.exists = exists
        this.id = id
        this.data = data
    }
    set(value){
        return new Promise(resolve => {
            this.exists = true
            this.data = value
            this.vault.setDeposit(this.id, value).then(() => {
                resolve(null)
            })
        })
    }
    remove(){
        return new Promise(resolve => {
            this.exists = false
            this.data = null
            this.vault.removeDeposit(this.id).then(() => {
                resolve(null)
            })
        })
    }
    syncData(){
        return new Promise(resolve => {
            this.vault.getDepositData(this.id).then(({ exists, data }) => {
                this.exists = exists
                this.data = data
                resolve(null)
            })
        })
    }
}

class Collection {
    constructor(vault, id, data){
        this.vault = vault
        this.id = id
        this.data = data
    }
    set(value){
        return new Promise((resolve, reject) => {
            if(Array.isArray(value)){
                this.data = value
                this.vault.setCollection(this.id, value).then(() => {
                    resolve(null)
                })
            } else {
                console.warn(`Argument "value" must be an array. Received "${typeof value}" instead`)
                reject(null)
            }
        })
    }
    findOneAndCallback(test, callback){
        return new Promise((resolve, reject) => {
            if(typeof test == "function"){
                for(let i = 0;i<this.data.length;i++){
                    if(test(this.data[i])){
                        if(typeof callback == "function"){
                            return callback(i, resolve)
                        } else {
                            console.warn(`Argument "callback" must be a function. Received "${typeof callback}" instead`)
                            reject(null)
                        }
                    }
                }
                console.warn(`No element in collection matched the provided test function`)
                resolve(null)
            } else {
                console.warn(`Argument "test" must be a function. Received "${typeof test}" instead`)
                reject(null)
            }
        })
    }
    addOne(value){
        return this.set([...this.data, value])
    }
    setOne(test, value){
        return this.findOneAndCallback(test, (index, resolve) => {
            let updatedCollection = [...this.data]
            updatedCollection[index] = value
            this.set(updatedCollection).then(() => {
                resolve(null)
            })
        })
    }
    setOneByUuid(uuid, value){
        return this.setOne(({ _uuid }) => _uuid === uuid, value)
    }
    updateOne(test, value){
        return this.findOneAndCallback(test, (index, resolve) => {
            let updatedCollection = [...this.data]
            updatedCollection[index] = Object.assign(updatedCollection[index], value)
            this.set(updatedCollection).then(() => {
                resolve(null)
            })
        })
    }
    updateOneByUuid(uuid, value){
        return this.updateOne(({ _uuid }) => _uuid === uuid, value)
    }
    removeOne(test){
        return this.findOneAndCallback(test, (index, resolve) => {
            let updatedCollection = [...this.data]
            updatedCollection.splice(index, 1)
            this.set(updatedCollection).then(() => {
                resolve(null)
            })
        })
    }
    removeOneByUuid(uuid){
        return this.removeOne(({ _uuid }) => _uuid === uuid)
    }
    findOne(test){
        return this.findOneAndCallback(test, (index, resolve) => {
            resolve(this.data[index])
        })
    }
    findOneByUuid(uuid){
        return this.findOne(({ _uuid }) => _uuid === uuid)
    }
    addMultiple(values){
        return this.set([...this.data, ...values])
    }
    setMultiple(test, valueCallback){
        return new Promise((resolve, reject) => {
            if(typeof test == "function"){
                let updatedCollection = [...this.data]
                for(let i = 0;i<updatedCollection.length;i++){
                    if(test(updatedCollection[i])){
                        if(typeof valueCallback == "function"){
                            updatedCollection[i] = valueCallback(updatedCollection[i])
                        } else {
                            console.warn(`Argument "valueCallback" must be a function. Received "${typeof valueCallback}" instead`)
                            reject(null)
                        }
                    }
                }
                this.set(updatedCollection).then(() => {
                    resolve(null)
                })
            } else {
                console.warn(`Argument "test" must be a function. Received "${typeof test} instead"`)
                reject(null)
            }
        })
    }
    setMultipleByUuids(uuids, valueCallback){
        return new Promise((resolve, reject) => {
            if(Array.isArray(uuids)){
                this.setMultiple(({ _uuid }) => uuids.includes(_uuid), valueCallback).then(() => {
                    resolve(null)
                })
            } else {
                console.warn(`Argument "uuids" must be an array. Received "${typeof uuids}" instead`)
                reject(null)
            }
        })
    }
    updateMultiple(test, valueCallback){
        return new Promise((resolve, reject) => {
            if(typeof test == "function"){
                let updatedCollection = [...this.data]
                for(let i = 0;i<updatedCollection.length;i++){
                    if(test(updatedCollection[i])){
                        if(typeof valueCallback == "function"){
                            updatedCollection[i] = Object.assign(updatedCollection[i], valueCallback(updatedCollection[i]))
                        } else {
                            console.warn(`Argument "valueCallback" must be a function. Received "${typeof valueCallback}" instead`)
                            reject(null)
                        }
                    }
                }
                this.set(updatedCollection).then(() => {
                    resolve(null)
                })
            } else {
                console.warn(`Argument "test" must be a function. Received "${typeof test} instead"`)
                reject(null)
            }
        })
    }
    updateMultipleByUuids(uuids, valueCallback){
        return new Promise((resolve, reject) => {
            if(Array.isArray(uuids)){
                this.updateMultiple(({ _uuid }) => uuids.includes(_uuid), valueCallback).then(() => {
                    resolve(null)
                })
            } else {
                console.warn(`Argument "uuids" must be an array. Received "${typeof uuids}" instead`)
                reject(null)
            }
        })
    }
    removeMultiple(test){
        return new Promise((resolve, reject) => {
            if(typeof test == "function"){
                this.set(this.data.filter(element => !test(element))).then(() => {
                    resolve(null)
                })
            } else {
                console.warn(`Argument "test" must be a function. Received "${typeof test}" instead`)
                reject(null)
            }
        })
    }
    removeMultipleByUuids(uuids){
        return new Promise((resolve, reject) => {
            if(Array.isArray(uuids)){
                this.removeMultiple(({ _uuid }) => uuids.includes(_uuid)).then(() => {
                    resolve(null)
                })
            } else {
                console.warn(`Argument "uuids" must be an array. Received "${typeof uuids}" instead`)
                reject(null)
            }
        })
    }
    findMultiple(test){
        return new Promise((resolve, reject) => {
            if(typeof test == "function"){
                resolve(this.data.filter(test))
            } else {
                console.warn(`Argument "test" must be a function. Received "${typeof test} instead"`)
                reject(null)
            }
        })
    }
    findMultipleByUuids(uuids){
        return new Promise((resolve, reject) => {
            if(Array.isArray(uuids)){
                this.findMultiple(({ _uuid }) => uuids.includes(_uuid)).then(elements => {
                    resolve(elements)
                })
            } else {
                console.warn(`Argument "uuids" must be an array. Received "${typeof uuids}" instead`)
                reject(null)
            }
        })
    }
    syncData(){
        return new Promise(async (resolve) => {
            const synchronizedData = await this.vault.getCollectionData(this.id)
            if(synchronizedData !== null){
                this.data = synchronizedData
            }
            resolve(null)
        })
    }
}

class Vault {
    constructor(storageKey, encryptionKey, options){
        if(typeof storageKey == "string"){
            if(storageKey != ""){
                this.storageKey = storageKey
            } else {
                console.warn(`Argument "storageKey" must be a non-empty string. Received an empty string. Defaulted to "vault"`)
            }
        } else {
            console.warn(`Argument "storageKey" must be a non-empty string. Received "${typeof storageKey}" instead. Defaulted to "vault"`)
            this.storageKey = "vault"
        }
        if(typeof encryptionKey == "string"){
            this.encryptionKey = encryptionKey
        } else {
            console.warn(`Argument "encryptionKey" must be a string. Received "${typeof encryptionKey}" instead. Defaulted to ""`)
            this.encryptionKey = ""
        }
        this.options = {}
        if(typeof options == "object" && !Array.isArray(options) && options !== null){
            if(options.hasOwnProperty("onGetStorageError")){
                if(typeof options.onGetStorageError == "function"){
                    this.options.onGetStorageError = options.onGetStorageError
                } else {
                    console.warn(`Property "onGetStorageError" of Argument "options" must be a function. Received "${typeof options.onGetStorageError}" instead. Defaulted to console.warn`)
                    this.options.onGetStorageError = console.warn
                }
            } else {
                this.options.onGetStorageError = console.warn
            }
            if(options.hasOwnProperty("onSetStorageError")){
                if(typeof options.onSetStorageError == "function"){
                    this.options.onSetStorageError = options.onSetStorageError
                } else {
                    console.warn(`Property "onSetStorageError" of Argument "options" must be a function. Received "${typeof options.onSetStorageError}" instead. Defaulted to console.warn`)
                    this.options.onSetStorageError = console.warn
                }
            } else {
                this.options.onSetStorageError = console.warn
            }
            if(options.hasOwnProperty("onDecryptionFail")){
                if(typeof options.onDecryptionFail == "function"){
                    this.options.onDecryptionFail = options.onDecryptionFail
                } else {
                    console.warn(`Property "onDecryptionFail" of Argument "options" must be a function. Received "${typeof options.onDecryptionFail}" instead. Defaulted to console.warn`)
                    this.options.onDecryptionFail = console.warn
                }
            } else {
                this.options.onDecryptionFail = console.warn
            }
        } else {
            this.options = {
                onGetStorageError: console.warn,
                onSetStorageError: console.warn,
                onDecryptionFail: console.warn
            }
        }
    }
    initialize(collectionIds){
        return new Promise((resolve, reject) => {
            if(Array.isArray(collectionIds)){
                AsyncStorage.getItem(this.storageKey, (error, result) => {
                    if(error){
                        this.options.onGetStorageError(error)
                        resolve(null)
                    } else if(result == null) {
                        let updatedVault = {
                            deposits: {},
                            collections: {}
                        }
                        collectionIds.forEach((collectionId, index) => {
                            if(typeof collectionId == "string"){
                                if(collectionId != ""){
                                    updatedVault.collections[collectionId] = []
                                } else {
                                    console.warn(`Argument "collectionIds" must be an array of non-empty strings. Received an empty string at index ${index}`)
                                    reject(null)
                                }
                            } else {
                                console.warn(`Argument "collectionIds" must be an array of non-empty strings. Received "${typeof collectionId}" at index ${index}`)
                                reject(null)
                            }
                        })
                        AsyncStorage.setItem(this.storageKey, CryptoJS.AES.encrypt(JSON.stringify(updatedVault), this.encryptionKey).toString(), (err) => {
                            if(err){
                                this.options.onSetStorageError(err)
                            }
                            resolve(null)
                        })
                    } else {
                        try {
                            const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                            let updatedVault = {...decrypted}
                            collectionIds.forEach((collectionId, index) => {
                                if(typeof collectionId == "string"){
                                    if(collectionId != ""){
                                        if(!decrypted.collections.hasOwnProperty(collectionId)){
                                            updatedVault.collections[collectionId] = []
                                        }
                                    } else {
                                        console.warn(`Argument "collectionIds" must be an array of non-empty strings. Received an empty string at index ${index}`)
                                        reject(null)
                                    }
                                } else {
                                    console.warn(`Argument "collectionIds" must be an array of non-empty strings. Received "${typeof collectionId}" at index ${index}`)
                                    reject(null)
                                }
                            })
                            AsyncStorage.setItem(this.storageKey, CryptoJS.AES.encrypt(JSON.stringify(updatedVault), this.encryptionKey).toString(), (err) => {
                                if(err){
                                    this.options.onSetStorageError(err)
                                }
                                resolve(null)
                            })
                        } catch (err) {
                            this.options.onDecryptionFail(err)
                            resolve(null)
                        }
                    }
                })
            } else {
                console.warn(`Argument "collectionIds" must be an array of non-empty strings. Received "${typeof collectionIds}" instead`)
                reject(null)
            }
        })
    }
    reset(){
        return new Promise(resolve => {
            AsyncStorage.setItem(this.storageKey, CryptoJS.AES.encrypt(JSON.stringify({ deposits: {}, collections: {} }), this.encryptionKey).toString(), (error) => {
                if(error){
                    this.options.onSetStorageError(error)
                }
                resolve(null)
            })
        })
    }
    getDeposit(depositId){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey, (error, result) => {
                if(error){
                    this.options.onGetStorageError(error)
                    resolve(null)
                } else {
                    try {
                        const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                        if(typeof depositId == "string"){
                            if(depositId != ""){
                                if(decrypted.deposits.hasOwnProperty(depositId)){
                                    resolve(new Deposit(this, true, depositId, decrypted.deposits[depositId]))
                                } else {
                                    resolve(new Deposit(this, false, depositId, null))
                                }
                            } else {
                                console.warn(`Argument "depositId" must be a non-empty string. Received an empty string`)
                                reject(null)
                            }
                        } else {
                            console.warn(`Argument "depositId" must be a non-empty string. Received "${typeof depositId}" instead`)
                            reject(null)
                        }
                    } catch (err) {
                        this.options.onDecryptionFail(err)
                        resolve(null)
                    }
                }
            })
        })
    }
    getDepositData(depositId){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey, (error, result) => {
                if(error){
                    this.options.onGetStorageError(error)
                    resolve(null)
                } else {
                    try {
                        const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                        if(typeof depositId == "string"){
                            if(depositId != ""){
                                if(decrypted.deposits.hasOwnProperty(depositId)){
                                    resolve({ exists: true, data: decrypted.deposits[depositId] })
                                } else {
                                    resolve({ exists: false, data: null })
                                }
                            } else {
                                console.warn(`Argument "depositId" must be a non-empty string. Received an empty string`)
                                reject(null)
                            }
                        } else {
                            console.warn(`Argument "depositId" must be a non-empty string. Received "${typeof depositId}" instead`)
                            reject(null)
                        }
                    } catch (err) {
                        this.options.onDecryptionFail(err)
                        resolve(null)
                    }
                }
            })
        })
    }
    setDeposit(depositId, value){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey, (error, result) => {
                if(error){
                    this.options.onGetStorageError(error)
                    resolve(null)
                } else {
                    try {
                        const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                        if(typeof depositId == "string"){
                            if(depositId != ""){
                                let updatedVault = {...decrypted}
                                updatedVault.deposits[depositId] = value
                                AsyncStorage.setItem(this.storageKey, CryptoJS.AES.encrypt(JSON.stringify(updatedVault), this.encryptionKey).toString(), (err) => {
                                    if(err){
                                        this.options.onSetStorageError(err)
                                    }
                                    resolve(null)
                                })
                            } else {
                                console.warn(`Argument "depositId" must be a non-empty string. Received an empty string`)
                            }
                        } else {
                            console.warn(`Argument "depositId" must be a non-empty string. Received "${typeof depositId}" instead`)
                            reject(null)
                        }
                    } catch (err) {
                        this.options.onDecryptionFail(err)
                        resolve(null)
                    }
                }
            })
        })
    }
    removeDeposit(depositId){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey, (error, result) => {
                if(error){
                    this.options.onGetStorageError(error)
                    resolve(null)
                } else {
                    try {
                        const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                        if(typeof depositId == "string"){
                            if(depositId != ""){
                                let updatedVault = {...decrypted}
                                delete updatedVault.deposits[depositId]
                                AsyncStorage.setItem(this.storageKey, CryptoJS.AES.encrypt(JSON.stringify(updatedVault), this.encryptionKey).toString(), (err) => {
                                    if(err){
                                        this.options.onSetStorageError(err)
                                    }
                                    resolve(null)
                                })
                            } else {
                                console.warn(`Argument "depositId" must be a non-empty string. Received an empty string`)
                            }
                        } else {
                            console.warn(`Argument "depositId" must be a non-empty string. Received "${typeof depositId}" instead`)
                            reject(null)
                        }
                    } catch (err) {
                        this.options.onDecryptionFail(err)
                        resolve(null)
                    }
                }
            })
        })
    }
    getCollection(collectionId){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey, (error, result) => {
                if(error){
                    this.options.onGetStorageError(error)
                    resolve(null)
                } else {
                    try {
                        const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                        if(typeof collectionId == "string"){
                            if(collectionId != ""){
                                if(decrypted.collections.hasOwnProperty(collectionId)){
                                    resolve(new Collection(this, collectionId, decrypted.collections[collectionId]))
                                } else {
                                    console.warn(`Could not find a collection with id "${collectionId}". Make sure you have properly initialized the collection`)
                                    reject(null)
                                }
                            } else {
                                console.warn(`Argument "collectionId" must be a non-empty string. Received an empty string`)
                                reject(null)
                            }
                        } else {
                            console.warn(`Argument "collectionId" must be a non-empty string. Received "${typeof collectionId}" instead`)
                            reject(null)
                        }
                    } catch (err) {
                        this.options.onDecryptionFail(err)
                        resolve(null)
                    }
                }
            })
        })
    }
    getCollectionData(collectionId){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey, (error, result) => {
                if(error){
                    this.options.onGetStorageError(error)
                    resolve(null)
                } else {
                    try {
                        const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                        if(typeof collectionId == "string"){
                            if(collectionId != ""){
                                if(decrypted.collections.hasOwnProperty(collectionId)){
                                    resolve(decrypted.collections[collectionId])
                                } else {
                                    console.warn(`Could not find a collection with id "${collectionId}". Make sure you have properly initialized the collection`)
                                    reject(null)
                                }
                            } else {
                                console.warn(`Argument "collectionId" must be a non-empty string. Received an empty string`)
                                reject(null)
                            }
                        } else {
                            console.warn(`Argument "collectionId" must be a non-empty string. Received "${typeof collectionId}" instead`)
                            reject(null)
                        }
                    } catch (err) {
                        this.options.onDecryptionFail(err)
                        resolve(null)
                    }
                }
            })
        })
    }
    setCollection(collectionId, value){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey, (error, result) => {
                if(error){
                    this.options.onGetStorageError(error)
                    resolve(null)
                } else {
                    try {
                        const decrypted = JSON.parse(CryptoJS.AES.decrypt(result, this.encryptionKey).toString(CryptoJS.enc.Utf8))
                        if(typeof collectionId == "string"){
                            let updatedVault = {...decrypted}
                            if(collectionId != ""){
                                updatedVault.collections[collectionId] = value
                                if(Array.isArray(value)){
                                    for(let i = 0;i<value.length;i++){
                                        if(typeof value[i] == "object" && !Array.isArray(value[i]) && value[i] !== null){
                                            if(!value[i].hasOwnProperty("_uuid")){
                                                updatedVault.collections[collectionId][i]._uuid = uuid.v4()
                                            }
                                        } else {
                                            console.warn(`Collections must be an array of non-null non-array objects. Failed to set collection`)
                                            reject(null)
                                        }
                                    }
                                    AsyncStorage.setItem(this.storageKey, CryptoJS.AES.encrypt(JSON.stringify(updatedVault), this.encryptionKey).toString(), (err) => {
                                        if(err){
                                            this.options.onSetStorageError(err)
                                        }
                                        resolve(null)
                                    })
                                } else {
                                    console.warn(`Argument "value" must be an array. Received "${typeof value}" instead`)
                                    reject(null)
                                }
                            } else {
                                console.warn(`Argument "collectionId" must be a non-empty string. Received an empty string`)
                                reject(null)
                            }
                        } else {
                            console.warn(`Argument "collectionId" must be a non-empty string. Received "${typeof collectionId}" instead`)
                            reject(null)
                        }
                    } catch (err) {
                        this.options.onDecryptionFail(err)
                        resolve(null)
                    }
                }
            })
        })
    }
}

export default Vault