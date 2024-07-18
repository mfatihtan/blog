import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import themeColor from '../theme/themeColor'
import { height, width } from '../theme/dimension'

const PostHead = ({ item }: any) => {
      return (
            <View style={[styles.headInfo, item.image == "" && { backgroundColor: themeColor.royalBlue }]}>
                  {item.image != "" && <Image source={{ uri: item.image }} style={styles.image} />}
                  <View style={styles.head}>
                        <Text style={styles.headText}>{item.head}</Text>
                  </View>
            </View>
      )
}

export default PostHead

const styles = StyleSheet.create({
      headInfo: {
            height: height * 0.3,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
      },
      image: {
            width: width,
            height: height * 0.3,
            resizeMode: "stretch",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
      },
      head: {
            position: "absolute",
            backgroundColor: "white",
            padding: 10,
            borderRadius: 15,
      },
      headText: {
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
      },
})