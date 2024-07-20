import React, { useState } from 'react';
import themeColor from '../../theme/themeColor';
import { width, height } from '../../theme/dimension';
import { CostumInput, CostumButton } from '../../components';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { loading } from '../../redux/sileces/authSlice';
import { useDispatch, UseDispatch } from 'react-redux';

const Index = ({ navigation }: any) => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const dispatch = useDispatch();
      return (
            <SafeAreaView style={styles.root}>
                  <ScrollView style={{ flexGrow: 1 }}>
                        <View style={styles.body}>
                              <Image source={require("../../../assets/login-bg.png")} style={styles.image} />
                              <CostumInput setInput={setEmail} keyboardType={"email-address"} icon={"IconE"} name={"email"} labelText={"E-mail"} placeholder={"E-mail girin..."} />
                              <CostumInput setInput={setPassword} secureTextEntry icon={"IconMI"} name={"password"} labelText={"Şifre"} placeholder={"Şifrenizi girin..."} />
                              <View style={styles.resetPassword}>
                                    <TouchableOpacity><Text style={[styles.text, { color: themeColor.royalBlue }]}>Şifremi unuttum</Text></TouchableOpacity>
                              </View>
                              <View style={styles.buttonView}>
                                    <CostumButton onPress={() => dispatch(loading("kkdkfs"))} text={"Giriş yap"} backgroundColor={themeColor.yellow} borderColor={themeColor.yellowDark} />
                                    <View style={styles.buttonSecond}>
                                          <Text style={styles.text}>Henüz hesabın yok mu, </Text>
                                          <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text style={[styles.text, { color: themeColor.royalBlue }]}>Kayıt ol</Text></TouchableOpacity>
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
            backgroundColor: themeColor.white,
      },
      body: {
            alignItems: "center",
            justifyContent: "center",
      },
      image: {
            marginTop: 20,
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
      resetPassword: {
            width: width * 0.9,
            alignItems: "flex-end",
            marginBottom: 10,
      },

})