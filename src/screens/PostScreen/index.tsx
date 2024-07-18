import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { height, width } from '../../theme/dimension'
import themeColor from '../../theme/themeColor'
import { PostDetail, PostHead, Comments, } from '../../components'

const Index = ({ route }: any) => {
      const [visible, setVisible] = useState(false);
      const { item } = route.params
      const comments = [...item.comments];

      return (
            <View style={styles.root}>
                  <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
                  <ScrollView>
                        <PostHead item={item} />
                        <View style={styles.body}>
                              <Text style={styles.desc}>{item.description}</Text>
                              <Text style={styles.text}>{item.body}</Text>
                        </View>
                  </ScrollView>
                  <PostDetail item={item} />
                  <Comments item={comments} visible={visible} setVisible={setVisible} />
            </View>
      )
}

export default Index

const styles = StyleSheet.create({
      root: {
            flex: 1,
            backgroundColor: "#f1f1f1",
      },
      body: {
            padding: 20,
            marginTop: 20,
      },
      desc: {
            fontSize: 18,
            fontWeight: "600",
            lineHeight: 26,
            color: "black",
            marginBottom: 20,
      },
      text: {
            fontSize: 16,
            color: "gray",
            lineHeight: 20,
      },
})