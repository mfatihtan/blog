import { Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { RenderComment, NewComment } from '../components';
import { useSelector } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RenderHiddenComment } from './RenderComment';

const Comments = ({ item, visible, setVisible }: any) => {
      const postComments = useSelector((state: any) => state.data.data[item].comments);
      const [openRowKey, setOpenRowKey] = useState(null);
      const listViewRef = useRef<any>(null);

      useEffect(() => {
            listViewRef.current?._listView.scrollToEnd({ animated: true });
      }, [postComments]);
      const handleRowOpen = (rowKey: any) => {
            if (openRowKey && openRowKey !== rowKey) {
                  listViewRef.current._rows[openRowKey].closeRow();
            }
            setOpenRowKey(rowKey);
      };
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
                              <SwipeListView
                                    ref={listViewRef}
                                    style={styles.comments}
                                    contentContainerStyle={{ alignItems: "center" }}
                                    data={postComments}
                                    renderItem={RenderComment}
                                    renderHiddenItem={RenderHiddenComment}
                                    leftOpenValue={75}
                                    rightOpenValue={-75}
                                    closeOnScroll={true}
                                    onRowOpen={(rowKey) => handleRowOpen(rowKey)}
                                    keyExtractor={(item: any) => item.comment_id}
                              />
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
            backgroundColor: "#f1f1f1",
            paddingTop: 20,
      },
})