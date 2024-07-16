import React from 'react';
import themeColor from '../../theme/themeColor';
import { width, height } from '../../theme/dimension';
import { CostumButton } from '../../components';
import { Image, StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Index = ({ navigation }: any) => {
      return (
            <SafeAreaView style={styles.root}>
                  <StatusBar translucent backgroundColor={"transparent"} />
                  <Text style={styles.header}>Yaz, paylaş, eğlen!</Text>
                  <Image source={require("../../../assets/welcome.png")} style={styles.image} />
                  <View style={styles.buttons}>
                        <CostumButton onPress={() => navigation.navigate("Signup")} text={"Kayıt ol"} backgroundColor={themeColor.yellow} borderColor={themeColor.yellowDark} />
                        <CostumButton onPress={() => navigation.navigate("Login")} text={"Giriş yap"} borderColor={"lightgray"} />
                  </View>
            </SafeAreaView>
      )
}

export default Index

const styles = StyleSheet.create({
      root: {
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: themeColor.royalBlue,
      },
      header: {
            fontSize: 34,
            fontWeight: "bold",
            color: themeColor.white,
      },
      image: {
            width: width * 0.9,
            height: height * 0.4,
            resizeMode: "stretch",
      },
      buttons: {
            width: width * 0.95,
            padding: 10,
      },
})