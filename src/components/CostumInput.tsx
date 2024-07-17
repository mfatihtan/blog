import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { width } from '../theme/dimension';
import themeColor from '../theme/themeColor';
import { RenderIcon } from '../components/';
import { TouchableOpacity } from 'react-native';

const CostumInput = ({ setInput, icon, name, keyboardType = "default", secureTextEntry = false, labelText, placeholder, }: any) => {
      const [show, setShow] = useState(true);
      const handleShow = () => {
            setShow(!show)
      }
      return (
            <View style={styles.inputRow}>
                  <View style={styles.label}>
                        <RenderIcon Icon={icon} name={name} size={24} color={themeColor.royalBlue} />
                        <Text style={styles.labelText}>{labelText}: </Text>
                  </View>
                  <View style={styles.textInput}>
                        <TextInput onChangeText={setInput} keyboardType={keyboardType} secureTextEntry={show} placeholder={placeholder} style={styles.input} placeholderTextColor={"lightgray"} />
                        {secureTextEntry && <TouchableOpacity onPress={handleShow} style={styles.showPassword}>
                              <RenderIcon Icon={"IconI"} name={show ? "eye-off" : "eye"} size={30} />
                        </TouchableOpacity>}
                  </View>
            </View>
      )
}

export default CostumInput

const styles = StyleSheet.create({
      label: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 10,
      },
      labelText: {
            fontSize: 20,
            marginLeft: 10,
            fontWeight: "500",
            color: "black",
      },
      inputRow: {
            padding: 20,
      },
      input: {
            width: width * 0.90,
            borderWidth: 2,
            padding: 15,
            borderRadius: 10,
            fontSize: 18,
            fontWeight: "600",
            color: "black",
            borderColor: "gray",
      },
      textInput: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
      },
      showPassword: {
            position: "absolute",
            right: 2,
            borderRadius: 15,
            padding: 15,
            height: "90%",
            backgroundColor: "white",
      },
})