import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { width } from '../theme/dimension'
import RenderIcon from './RenderIcon'
import themeColor from '../theme/themeColor'
import { useSelector } from 'react-redux'

const RenderBlogPost = ({ navigation, item, style }: any) => {
      const postData = useSelector((state: any) => state.data.data[item]);
      const likes = postData.likes;
      const userMe = "user4";
      const likeIs = likes.find((i: any) => i == userMe);
      return (
            <TouchableOpacity onPress={() => navigation.navigate("Post", { item: item })} activeOpacity={0.6} style={style == "grid" ? styles.postGrid : styles.post}>
                  {postData.image != "" && <Image source={{ uri: postData.image }} style={style == "grid" ? styles.imageGrid : styles.image} />}
                  <View style={style == "grid" ? styles.infoGrid : [styles.info, postData.image == "" && { width: width * 0.95 }]}>
                        <Text numberOfLines={1} style={styles.head}>{postData.head}</Text>
                        <Text numberOfLines={2} style={styles.body}>{postData.description}</Text>
                        <View style={styles.details}>
                              <View style={styles.detail}><RenderIcon Icon={"IconFA"} name={likeIs ? "heart" : "heart-o"} color={likeIs ? "red" : "black"} size={18} /><Text style={styles.detailText}>{likes.length}</Text></View>
                              <View style={styles.detail}><RenderIcon Icon={"IconFA"} name={"comment-o"} color={"black"} size={18} /><Text style={styles.detailText}>{postData.comments.length}</Text></View>
                              <RenderIcon Icon={"IconF"} name={"share"} size={18} color={"black"} />
                        </View>
                  </View>
            </TouchableOpacity>
      )
}

export default RenderBlogPost

const styles = StyleSheet.create({
      post: {
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 2,
            marginVertical: 10,
            width: width * 0.95,
            borderWidth: 2,
            borderColor: "lightgray",
            backgroundColor: themeColor.white,
      },
      postGrid: {
            borderRadius: 15,
            marginVertical: 5,
            marginHorizontal: 2.5,
            width: width * 0.48,
            borderWidth: 2,
            borderColor: "lightgray",
            backgroundColor: themeColor.white,
            justifyContent: "center",
            alignItems: "center",
      },
      image: {
            width: width * 0.3,
            height: width * 0.295,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            resizeMode: "stretch",
      },
      imageGrid: {
            width: width * 0.475,
            height: width * 0.30,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            resizeMode: "stretch",
      },
      info: {
            justifyContent: "space-between",
            padding: 10,
            width: width * 0.65,
      },
      infoGrid: {
            justifyContent: "space-around",
            paddingHorizontal: 10,
            width: width * 0.45,
      },
      head: {
            fontSize: 16,
            color: "black",
            fontWeight: "600",
      },
      body: {
            fontSize: 14,
            fontWeight: "400",
            color: "gray",
      },
      details: {
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 5,
      },
      detail: {
            flexDirection: "row",
      },
      detailText: {
            marginLeft: 5,
            color: "gray",
            fontSize: 16,
            fontWeight: "500",
      },
})