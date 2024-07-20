import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RenderIcon from './RenderIcon'
import { height, width } from '../theme/dimension'
import themeColor from '../theme/themeColor'
import { useDispatch, useSelector } from 'react-redux'
import { setNewPost } from '../redux/sileces/dataSlice'
import { setBody, setHead, setDesc, setNull, setTag } from '../redux/sileces/newPostSlice';

const CreatePostBody = ({ setSelectImg, setVisible, }: any) => {
      const dispatch = useDispatch();
      const { body, head, description, image, tag, comments, likes } = useSelector((state: any) => state.newPost);
      const { data } = useSelector((state: any) => state.data);
      const length = Object.keys(data).length;
      const handleTags = (text: any) => {
            const tags = text.split(',').map((item: any) => item.trim()).filter((item: any) => item);
            dispatch(setTag(tags))
      };
      const handleReset = () => {
            setVisible(false);
            dispatch(setNull());
      }

      const handleNewPost = () => {
            if (body != "" && head != "" && description != "" && tag != "") {
                  const postId = `post${length + 1}`;
                  const post = {
                        "head": head,
                        "image": image,
                        "description": description,
                        "body": body,
                        "tag": tag,
                        "comments": comments,
                        "likes": likes,
                  }
                  dispatch(setNewPost({ postId, post }))
                  dispatch(setNull());
                  setVisible(false);
            }
      }
      return (<>
            <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  keyboardVerticalOffset={Platform.OS === "android" ? 52 : 0}
            >
                  <ScrollView contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                  }}>
                        <View style={{ width: width, flex: 1, alignItems: "center" }}>
                              <View style={styles.post}>
                                    {head != "" && <View style={styles.info}>
                                          <Text style={styles.infoText}>Yazı başlığı</Text>
                                    </View>}
                                    <TextInput value={head} style={styles.input} onChangeText={(text) => dispatch(setHead(text))} placeholder='Yazı başlığı ekle...' placeholderTextColor={"gray"} />
                              </View>
                              <View style={styles.selectImage}>
                                    {image != "" ? <View>
                                          <Image source={{ uri: image }} style={styles.image} />
                                          <TouchableOpacity onPress={() => setSelectImg(true)} style={styles.changeImgButton}>
                                                <RenderIcon Icon={"IconMI"} name={"image-search"} size={30} color={themeColor.royalBlue} />
                                          </TouchableOpacity>
                                    </View>
                                          : <TouchableOpacity onPress={() => setSelectImg(true)} style={styles.selectImageButton}>
                                                <RenderIcon Icon={"IconMI"} name={"image-search"} size={30} color={themeColor.royalBlue} />
                                                <Text style={styles.buttonText}>Resim seç</Text>
                                          </TouchableOpacity>}
                              </View>
                              <View style={styles.post}>
                                    {description != "" && <View style={styles.info}>
                                          <Text style={styles.infoText}>Yazı açıklaması</Text>
                                    </View>}
                                    <TextInput value={description} numberOfLines={1} onChangeText={(text) => dispatch(setDesc(text))} style={styles.input} placeholder='Yazı açıklaması ekle...' placeholderTextColor={"gray"} />
                              </View>
                              <View style={styles.post}>
                                    {body != "" && <View style={styles.info}>
                                          <Text style={styles.infoText}>Yazı içeriği</Text>
                                    </View>}
                                    <TextInput value={body} multiline onChangeText={(text) => dispatch(setBody(text))} style={styles.input} placeholder='Yazmaya başla...' placeholderTextColor={"gray"} />
                              </View>
                              <View style={styles.post}>
                                    {tag != "" && <View style={styles.info}>
                                          <Text style={styles.infoText}>Yazı etiketleri</Text>
                                    </View>}
                                    <TextInput value={tag} numberOfLines={1} onChangeText={(text) => handleTags(text)} style={styles.input} placeholder='Virgül ile ayırarak etiketleri ekle...' placeholderTextColor={"gray"} />
                              </View>
                        </View>
                  </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.buttons}>
                  <TouchableOpacity onPress={() => handleReset()} style={styles.headButton}>
                        <RenderIcon Icon={"IconAD"} name={"closecircle"} color={themeColor.royalBlue} size={28} />
                        <Text style={styles.headButtonText}>Vazgeç</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleNewPost()} style={styles.headButton}>
                        <Text style={styles.headButtonText}>Paylaş</Text>
                        <RenderIcon Icon={"IconCMI"} name={"send-circle"} color={themeColor.royalBlue} size={34} />
                  </TouchableOpacity>
            </View>
      </>
      )
}

export default CreatePostBody

const styles = StyleSheet.create({
      selectImage: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            width: width,
      },
      selectImageButton: {
            flexDirection: "row",
            alignItems: "center",
      },
      buttonText: {
            marginRight: 5,
            fontSize: 18,
            fontWeight: "500",
            color: "gray",
      },
      post: {
            borderWidth: 1,
            borderColor: "gray",
            // width: width * 0.90,
            borderRadius: 15,
            marginVertical: 10,
      },
      info: {
            position: "absolute",
            top: -16.5,
            left: 25,
            paddingVertical: 5,
            paddingHorizontal: 3,
            backgroundColor: "white",
      },
      infoText: {
            color: themeColor.royalBlue,
            fontWeight: "600",
            fontSize: 15,
      },
      image: {
            width: width * 0.90,
            height: width * 0.5,
            resizeMode: "stretch",
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "gray",
      },
      changeImgButton: {
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 15,
            borderBottomRightRadius: 15,
            shadowColor: "whie",
            shadowOffset: {
                  width: 3,
                  height: 4,
            },
            borderWidth: 1,
            borderColor: "gray",
            top: 0,
            left: 0,
            width: 50,
            height: 50,
            backgroundColor: "white",
      },
      input: {
            width: width * 0.9,
            padding: 15,
            fontSize: 16,
            fontWeight: "500",
            color: "black",
      },
      buttons: {
            width: width,
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 20,
            borderTopWidth: 1,
            borderColor: "lightgray",
      },
      headButton: {
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
      },
      headButtonText: {
            color: themeColor.royalBlue,
            fontWeight: "600",
            fontSize: 18,
            marginHorizontal: 10,
      },
})