import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PostDetail, PostHead, Comments, } from '../../components'
import { useSelector } from 'react-redux';

const Index = ({ route }: any) => {
      const [visible, setVisible] = useState(false);
      const { item } = route.params
      const postData = useSelector((state: any) => state.data.data[item]);
      return (
            <View style={styles.root}>
                  <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
                  <ScrollView>
                        <PostHead postData={postData} />
                        <View style={styles.body}>
                              <Text style={styles.desc}>{postData.description}</Text>
                              <Text style={styles.text}>{postData.body}</Text>
                        </View>
                  </ScrollView>
                  <PostDetail setVisible={setVisible} postId={item} />
                  <Comments item={item} visible={visible} setVisible={setVisible} />
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