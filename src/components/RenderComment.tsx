import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderComment = (item: any) => {
      return (
            <View key={item.comment_id} style={styles.comment}>
                  <Text style={styles.userName}>{item.comment_user_name}</Text>
                  <Text style={styles.commentText}>{item.comment}</Text>
            </View>
      )
}

export default RenderComment

const styles = StyleSheet.create({
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
})