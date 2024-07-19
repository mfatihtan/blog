import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { RenderIcon } from '.';
import { width } from '../theme/dimension';
import themeColor from '../theme/themeColor';
import { useDispatch, useSelector } from 'react-redux';
import { setComment } from '../redux/sileces/dataSlice';

const NewComment = ({ item }: any) => {
      const dispatch = useDispatch();
      const postComments = useSelector((state: any) => state.data.data[item].comments);
      const [userName, setUserName] = useState("Mehmet Fatih T.");
      const [newC, setNewC] = useState("");

      const handleNewComment = () => {
            if (newC != "" && newC.length > 5) {
                  const postId = item;
                  const newComment = {
                        comment: newC,
                        comment_id: `comment${postComments.length + 1}`,
                        comment_user_name: userName,
                  }
                  dispatch(setComment({ postId, newComment }));
                  setNewC("");
            }
      }
      return (
            <KeyboardAvoidingView
                  behavior={Platform.OS === "android" ? "padding" : "padding"}
                  keyboardVerticalOffset={Platform.OS === "android" ? 50 : 0}
            >
                  <View style={styles.newComment}>
                        <View style={styles.row}>
                              <TextInput value={newC} onChangeText={setNewC} multiline placeholder='Yorum yazmaya başla...' style={styles.input} />
                              <TouchableOpacity onPress={() => handleNewComment()} style={styles.button}><RenderIcon Icon={"IconAD"} name={"arrowup"} color={"white"} /></TouchableOpacity>
                        </View>
                  </View>
            </KeyboardAvoidingView>
      )
}

export default NewComment

const styles = StyleSheet.create({
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