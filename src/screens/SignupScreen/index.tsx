import React, { useState } from 'react';
import themeColor from '../../theme/themeColor';
import { width, height } from '../../theme/dimension';
import { CostumInput, CostumButton } from '../../components';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = ({ navigation }: any) => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [cPassword, setCPassword] = useState("");
      return (
            <SafeAreaView style={styles.root}>
                  <ScrollView style={{ flexGrow: 1 }}>
                        <View style={styles.body}>
                              <Image source={require("../../../assets/login-bg.png")} style={styles.image} />
                              <CostumInput setInput={setEmail} keyboardType={"email-address"} icon={"IconE"} name={"email"} labelText={"E-mail"} placeholder={"E-mail girin..."} />
                              <CostumInput setInput={setPassword} secureTextEntry icon={"IconMI"} name={"password"} labelText={"Şifre"} placeholder={"Şifrenizi girin..."} />
                              <CostumInput setInput={setCPassword} secureTextEntry icon={"IconMI"} name={"password"} labelText={"Şifre tekrar"} placeholder={"Şifreniniz tekrar girin..."} />
                              <View style={styles.buttonView}>
                                    <CostumButton text={"Kayıt ol"} backgroundColor={themeColor.yellow} borderColor={themeColor.yellowDark} />
                                    <View style={styles.buttonSecond}>
                                          <Text style={styles.text}>Zaten hesabın var mı, </Text>
                                          <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={[styles.text, { color: themeColor.royalBlue }]}>Giriş yap</Text></TouchableOpacity>
                                    </View>
                              </View>
                        </View>
                  </ScrollView>
            </SafeAreaView>
      )
}

export default Index

const styles = StyleSheet.create({
      root: {
            flex: 1,
            paddingVertical: 30,
            backgroundColor: themeColor.white,
      },
      body: {
            alignItems: "center",
            justifyContent: "center",
      },
      image: {
            width: width * 0.7,
            height: height * 0.20,
            resizeMode: "stretch",
      },
      buttonView: {
            width: width * 0.90,
            marginTop: 10,
      },
      buttonSecond: {

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
      },
      text: {
            fontSize: 18,
            fontWeight: "600",
            color: "black",
      },

})