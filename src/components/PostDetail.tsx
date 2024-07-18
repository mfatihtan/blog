import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RenderIcon from './RenderIcon'
import { width } from '../theme/dimension'

const PostDetail = ({ item }: any) => {
      return (
            <View style={styles.details}>
                  <View style={styles.detail}><RenderIcon Icon={"IconFA5"} name={"heart"} color={"black"} size={24} /><Text style={styles.detailText}>{item.likes.length}</Text></View>
                  <View style={styles.detail}><RenderIcon Icon={"IconFA"} name={"comment-o"} color={"black"} size={24} /><Text style={styles.detailText}>{item.comments.length}</Text></View>
                  <RenderIcon Icon={"IconF"} name={"share"} size={24} color={"black"} />
            </View>
      )
}

export default PostDetail

const styles = StyleSheet.create({
      details: {
            paddingVertical: 20,
            width: width,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            backgroundColor: "white",
      },
      detail: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
      },
      detailText: {
            fontSize: 18,
            fontWeight: "600",
            color: "gray",
            marginLeft: 5,
      },
})