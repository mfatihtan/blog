import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RenderIcon from './RenderIcon'
import { width } from '../theme/dimension'

const RenderComment = (data: any) => {
      return (
            <View key={data.item.comment_id} style={styles.comment}>
                  <Text style={styles.userName}>{data.item.comment_user_name}</Text>
                  <Text style={styles.commentText}>{data.item.comment}</Text>
            </View>
      )
}

const RenderHiddenComment = (data: any) => {
      return (
            <View key={data.item.comment_id} style={styles.costum}>
                  {data.item.comment_user_name != "Elif B." ? <TouchableOpacity style={styles.button}>
                        <RenderIcon Icon={"IconMCI"} name={"delete"} color={"white"} size={34} />
                  </TouchableOpacity>
                        : <View />}
                  <TouchableOpacity style={[styles.button, { backgroundColor: "white" }]}>
                        <RenderIcon Icon={"IconMCI"} name={"pencil-box"} color={"black"} size={34} />
                  </TouchableOpacity>
            </View >
      )
}

export default RenderComment
export { RenderHiddenComment }

const styles = StyleSheet.create({
      comment: {
            padding: 10,
            marginBottom: 20,
            backgroundColor: "white",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 15,
            width: width * 0.95,
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
      costum: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: width * 0.95,
      },
      button: {
            width: 75,
            padding: 20,
            backgroundColor: "red",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
      },
})