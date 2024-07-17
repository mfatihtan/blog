import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import themeColor from '../theme/themeColor'

const CreatePostButton = ({ onPress }: any) => {
      return (
            <View style={styles.createPost}>
                  <TouchableOpacity onPress={onPress} style={styles.button}>
                        <Image source={require("../../assets/get-post.png")} style={styles.image} />
                  </TouchableOpacity>
            </View>
      )
}

export default CreatePostButton

const styles = StyleSheet.create({
      createPost: {
            position: "absolute",
            bottom: 10,
            right: 10,
            backgroundColor: themeColor.royalBlue,
            borderRadius: 20,
      },
      button: {
            width: 70,
            padding: 5,
      },
      image: {
            width: 60,
            height: 60,
            resizeMode: "stretch",
      },
})