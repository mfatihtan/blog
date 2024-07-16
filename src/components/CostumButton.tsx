import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CostumButton = ({ onPress, text, backgroundColor = "white", borderColor = "black", }: any) => {
      const [onPressIn, setOnPressIn] = useState(false);
      return (
            <TouchableOpacity
                  onPress={onPress}
                  onPressIn={() => setOnPressIn(true)}
                  onPressOut={() => setOnPressIn(false)}
                  activeOpacity={0.6}
                  style={[styles.button, { backgroundColor: backgroundColor, borderColor: borderColor }, onPressIn && { marginTop: 6, borderBottomWidth: 2, }]}>
                  <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
      )
}

export default CostumButton

const styles = StyleSheet.create({
      button: {
            borderWidth: 2,
            borderBottomWidth: 8,
            padding: 15,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
      },
      text: {
            fontSize: 18,
            fontWeight: "600",
            color: "black",
      },
})