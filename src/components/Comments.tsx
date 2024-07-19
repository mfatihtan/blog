import { Modal, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { RenderComment, NewComment } from '../components';
import { useSelector } from 'react-redux';

const Comments = ({ item, visible, setVisible }: any) => {
      const postComments = useSelector((state: any) => state.data.data[item].comments);
      const scrollViewRef = useRef<ScrollView>(null);

      useEffect(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
      }, [postComments]);
      return (
            <Modal
                  visible={visible}
                  statusBarTranslucent
                  animationType={"slide"}
                  onRequestClose={() => setVisible(false)}
                  transparent
            >
                  <View style={styles.root}>
                        <View style={styles.body}>
                              <View style={styles.head}>
                                    <Text style={styles.headText}>Yorumlar ({postComments.length})</Text>
                              </View>
                              <ScrollView ref={scrollViewRef} style={{ backgroundColor: "#f1f1f1", }}>
                                    <View style={styles.comments}>
                                          {postComments.map((item: any) => RenderComment(item))}
                                    </View>
                              </ScrollView>
                              <NewComment item={item} />
                        </View>
                  </View>
            </Modal >
      )
}

export default Comments

const styles = StyleSheet.create({
      root: {
            flex: 1,
            justifyContent: "flex-end",
      },
      body: {
            marginTop: StatusBar.currentHeight,
            flex: 1,
            backgroundColor: "white",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
      },
      head: {
            padding: 20,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 2,
            borderColor: "lightgray",
      },
      headText: {
            fontSize: 20,
            fontWeight: "600",
            color: "black",
      },
      comments: {
            padding: 10,
            backgroundColor: "#f1f1f1"
      },
})