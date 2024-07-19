import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RenderIcon from './RenderIcon'
import { width } from '../theme/dimension'
import { useSelector, useDispatch } from 'react-redux';
import { setLikePost, setUnLikePost } from '../redux/sileces/dataSlice';

const PostDetail = ({ postId, setVisible }: any) => {
      const dispatch = useDispatch();
      const data = useSelector((state: any) => state.data.data[postId])
      const [likes, setLikes] = useState(data.likes);
      const [likeIs, setLikeIs] = useState(false);
      const userMe = "user4";
      useEffect(() => {
            const likes = data.likes;
            setLikes(data.likes);
            const Is = likes.find((i: any) => i == userMe)
            setLikeIs(Is);
      }, [data])
      const handleLike = (userMe: string) => {
            if (likeIs) {
                  setLikeIs(false);
                  const newLikes = likes.filter((i: any) => i != userMe);
                  dispatch(setUnLikePost({ postId, newLikes }))
            } else {
                  setLikeIs(true);
                  dispatch(setLikePost({ postId, userMe }))
            };
      }
      return (
            <View style={styles.details}>
                  <TouchableOpacity onPress={() => handleLike(userMe)} style={styles.detail}><RenderIcon Icon={"IconFA"} name={likeIs ? "heart" : "heart-o"} color={likeIs ? "red" : "black"} size={24} /><Text style={styles.detailText}>{data.likes.length}</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => setVisible(true)} style={styles.detail}><RenderIcon Icon={"IconFA"} name={"comment-o"} color={"black"} size={24} /><Text style={styles.detailText}>{data.comments.length}</Text></TouchableOpacity>
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