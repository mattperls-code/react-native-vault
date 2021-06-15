import React, { useRef } from "react"
import { StatusBar, SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet, Animated } from "react-native"

import Vault from "react-native-vault"

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>
          {
            label
          }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const App = () => {
  let headerScale = useRef(new Animated.Value(1)).current

  const myVault = new Vault("myVault", "super-secret-key")
  myVault.initialize(["passwords"]).then(() => {
    console.log("Initialized Vault")
  })

  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView contentContainerStyle={styles.container} scrollEventThrottle={4} onScroll={(e) => {
        headerScale.setValue(Math.min(Math.max(1-e.nativeEvent.contentOffset.y / 250, 1), 1.15))
      }}>
        <Animated.Text style={[styles.header, { transform: [ { scale: headerScale} ] }]}>react-native-vault</Animated.Text>

        <Text style={styles.subheader}>Vault Methods</Text>
        <Button label={"Reset Vault"} onPress={() => {
          myVault.reset().then(() => { console.log("Reset Vault") })
        }} />
        <Button label={"Initialize Vault"} onPress={() => {
          myVault.initialize(["passwords"]).then(() => { console.log("Initialized Vault") })
        }} />
        <Button label={"Get Collection (Data)"} onPress={() => {
          myVault.getCollectionData("passwords").then(data => { console.log(JSON.stringify(data, null, 2)) })
        }} />
        <Button label={"Set Collection"} onPress={() => {
          myVault.setCollection("passwords", [
            { password: "123abc", info: "For Account A" },
            { password: "password123", info: "For Account B" }
          ]).then(() => { console.log("Set Collection") })
        }} />

        <Text style={styles.subheader}>Collection Methods (Singular)</Text>
        <Button label={"Add One"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.addOne({ password: "super secret password", info: "For Account C" }).then(() => { console.log("Added One") })
          })
        }}/>
        <Button label={"Set One"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.setOne(({ password }) => password == "123abc", { password: "a new password", info: "Some New Info" }).then(() => { console.log("Set One") })
          })
        }} />
        <Button label={"Update One"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.updateOne(({ password }) => password == "password123", { password: "a stronger password" }).then(() => { console.log("Updated One") })
          })
        }} />
        <Button label={"Remove One"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.removeOne(({ info }) => info == "Some New Info").then(() => { console.log("Removed One") })
          })
        }} />
        <Button label={"Find One"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.findOne(({ password }) => password == "super secret password").then(data => { console.log(JSON.stringify(data, null, 2)) })
          })
        }} />

        <Text style={styles.subheader}>Collection Methods (Multiple)</Text>
        <Button label={"Add Multiple"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.addMultiple([{ password: "qwerty", info: "For Account D" }, { password: "uiop", info: "For Account E" }]).then(() => { console.log("Added Multiple") })
          })
        }} />
        <Button label={"Set Multiple"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.setMultiple(({ password }) => password.length < 8, ({ password}) => { return { password: password + "123", info: "This is a little stronger now" }}).then(() => { console.log("Set Multiple") })
          })
        }} />
        <Button label={"Update Multiple"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.updateMultiple(({ password }) => password.slice(password.length - 3) == "123", ({ password }) => { return { password: password + "456" }}).then(() => { console.log("Updated Multiple") })
          })
        }} />
        <Button label={"Remove Multiple"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.removeMultiple(({ password }) => password.length < 10).then(() => { console.log("Removed Multiple") })
          })
        }} />
        <Button label={"Find Multiple"} onPress={() => {
          myVault.getCollection("passwords").then(collection => {
            collection.findMultiple(({ password }) => password.length > 15).then(data => { console.log(JSON.stringify(data, null, 2)) })
          })
        }} />

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "rgb(10, 20, 50)"
  },
  container: {
    alignItems: "center"
  },
  header: {
    fontSize: 32,
    color: "rgb(120, 250, 200)",
    textShadowColor: "rgb(120, 250, 200)",
    textShadowRadius: 8,
    letterSpacing: 1,
    marginVertical: 36
  },
  subheader: {
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "italic",
    color: "rgb(120, 250, 200)",
    marginTop: 20,
    marginBottom: 15
  },
  buttonContainer: {
    width: 270,
    height: 70,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "rgb(120, 250, 200)",
    backgroundColor: "rgb(40, 90, 110)",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLabel: {
    fontSize: 21,
    fontWeight: "500",
    color: "rgb(120, 250, 200)",
    letterSpacing: 0.5
  }
})

export default App