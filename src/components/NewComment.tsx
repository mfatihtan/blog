import { KeyboardAvoidingView, Platform, StyleSheet, Keyboard, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { RenderIcon } from '.';
import { width } from '../theme/dimension';
import themeColor from '../theme/themeColor';
import { useDispatch, useSelector } from 'react-redux';
import { setComment, updateComment } from '../redux/sileces/dataSlice';
import { setNewComment, setNewCommentNull } from '../redux/sileces/newCommentSlice';

const NewComment = ({ item }: any) => {
      const dispatch = useDispatch();
      const postComments = useSelector((state: any) => state.data.data[item].comments);
      const { userId, userName } = useSelector((state: any) => state.auth);
      const { comment, comment_id, re_comment } = useSelector((state: any) => state.comment);

      const handleNewComment = () => {
            Keyboard.dismiss();
            if (comment != "" && comment.length > 5) {
                  const postId = item;
                  const newComment = {
                        comment: comment,
                        comment_id: `comment${postComments.length + 1}`,
                        comment_user_name: userName,
                        comment_user_id: userId,
                  }
                  dispatch(setComment({ postId, newComment }));
                  dispatch(setNewCommentNull());
            }
      }
      const handleReComment = () => {
            Keyboard.dismiss();
            if (comment != "" && comment.length > 5) {
                  const postId = item;
                  const newComment = {
                        comment: comment,
                        comment_id: comment_id,
                        comment_user_name: userName,
                        comment_user_id: userId,
                  }
                  dispatch(updateComment({ postId, newComment }));
                  dispatch(setNewCommentNull());
            }
      }
      return (
            <KeyboardAvoidingView
                  behavior={Platform.OS === "android" ? "padding" : "padding"}
                  keyboardVerticalOffset={Platform.OS === "android" ? 50 : 0}
            >
                  <View style={styles.newComment}>
                        <View style={styles.row}>
                              <TextInput value={comment} onChangeText={(comment) => dispatch(setNewComment({ comment, comment_id }))} multiline placeholder='Yorum yazmaya başla...' style={styles.input} />
                              <TouchableOpacity onPress={() => re_comment ? handleReComment() : handleNewComment()} style={styles.button}><RenderIcon Icon={"IconAD"} name={"arrowup"} color={"white"} /></TouchableOpacity>
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