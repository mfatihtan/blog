import { FlatList, Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import themeColor from '../../theme/themeColor'
import { CreatePostButton, CreatePost, RenderBlogPost, HomeHeader } from '../../components'
import testData from '../../../assets/testData';
import { height, width } from '../../theme/dimension'

const Index = ({ navigation }: any) => {
      const [visible, setVisible] = useState(false);
      const [numberOfLines, setNumberOfLines] = useState(1);
      const [style, setSyle] = useState("list");
      const changeStyle = (number: number, style: string) => {
            setNumberOfLines(number);
            setSyle(style)
      }

      return (
            <View style={styles.root}>
                  <StatusBar translucent barStyle={"light-content"} backgroundColor={"transparent"} />
                  <FlatList
                        key={style}
                        numColumns={numberOfLines}
                        ListHeaderComponent={<HomeHeader changeStyle={changeStyle} style={style} />}
                        contentContainerStyle={{ alignItems: "center" }}
                        style={styles.posts}
                        data={testData}
                        renderItem={({ item }: any) => <RenderBlogPost item={item} style={style} navigation={navigation} />}
                  />
                  <CreatePostButton onPress={() => setVisible(true)} />
                  <CreatePost visible={visible} setVisible={setVisible} />
            </View>
      )
}

export default Index

const styles = StyleSheet.create({
      root: {
            flex: 1,
            backgroundColor: "#f1f1f1",
      },
      posts: {
      },
})