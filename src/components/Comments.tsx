import { KeyboardAvoidingView, Modal, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { height, width } from '../theme/dimension'
import themeColor from '../theme/themeColor'
import RenderIcon from './RenderIcon'

const Comments = ({ item, visible, setVisible }: any) => {
      const RenderComment = (item: any) => {
            return (
                  <View key={item.comment_id} style={styles.comment}>
                        <Text style={styles.userName}>{item.comment_user_name}</Text>
                        <Text style={styles.commentText}>{item.comment}</Text>
                  </View>
            )
      }
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
                                    <Text style={styles.headText}>Yorumlar ({item.length})</Text>
                              </View>
                              <ScrollView style={{ backgroundColor: "#f1f1f1", }}>
                                    <View style={styles.comments}>
                                          {item.map((item: any) => RenderComment(item))}
                                    </View>
                              </ScrollView>
                              <KeyboardAvoidingView
                                    behavior={Platform.OS === "android" ? "padding" : "padding"}
                                    keyboardVerticalOffset={Platform.OS === "android" ? 50 : 0}
                              >
                                    <View style={styles.newComment}>
                                          <View style={styles.row}>
                                                <TextInput multiline placeholder='Yorum yazmaya başla...' style={styles.input} />
                                                <TouchableOpacity style={styles.button}><RenderIcon Icon={"IconAD"} name={"arrowup"} color={"white"} /></TouchableOpacity>
                                          </View>
                                    </View>
                              </KeyboardAvoidingView>
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
      comment: {
            padding: 10,
            marginBottom: 20,
            backgroundColor: "white",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 15,
      },
      userName: {
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 10,
            color: "black",
      },
      commentText: {
            fontSize: 16,
            fontWeight: "400",
            color: "gray",
      },
      newComment: {
            padding: 20,
            backgroundColor: "white",
            borderTopWidth: 1,
            borderColor: "lightgray",
      },
      row: {
            padding: 10,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 15,
      },
      input: {
            width: width * 0.73,
      },
      button: {
            position: "absolute",
            right: width * 0.03,
            bottom: 10,
            backgroundColor: themeColor.royalBlue,
            padding: 10,
            borderRadius: 15,
      },
})