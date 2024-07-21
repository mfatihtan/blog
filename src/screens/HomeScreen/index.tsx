import { FlatList, StatusBar, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CreatePostButton, CreatePost, RenderBlogPost, HomeHeader } from '../../components'
import { useSelector } from 'react-redux';

const Index = ({ navigation }: any) => {
      const postData = useSelector((state: any) => state.data.data);
      const [data, setData] = useState(postData);
      const [visible, setVisible] = useState(false);
      const [numberOfLines, setNumberOfLines] = useState(1);
      const [style, setSyle] = useState("list");

      const changeStyle = (number: number, style: string) => {
            setNumberOfLines(number);
            setSyle(style)
      }
      useEffect(() => {
            setData(postData);
      }, [postData])
      return (
            <View style={styles.root}>
                  <StatusBar translucent barStyle={"light-content"} backgroundColor={"transparent"} />
                  <FlatList
                        stickyHeaderIndices={[0]}
                        key={style}
                        numColumns={numberOfLines}
                        ListHeaderComponent={<HomeHeader changeStyle={changeStyle} style={style} />}
                        contentContainerStyle={{ alignItems: "center" }}
                        style={styles.posts}
                        data={Object.keys(data)}
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