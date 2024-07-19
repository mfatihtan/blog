import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RenderIcon from './RenderIcon'
import { height, width } from '../theme/dimension'
import themeColor from '../theme/themeColor'
import { useDispatch, useSelector } from 'react-redux'
import { setBody, setHead, setDesc, setNull, setTag } from '../redux/sileces/newPostSlice';

const CreatePostBody = ({ setSelectImg, setVisible, }: any) => {
      const dispatch = useDispatch();
      const { body, head, description, image, tag } = useSelector((state: any) => state.newPost);
      const handleTags = (text: any) => {
            const tags = text.split(',').map((item: any) => item.trim()).filter((item: any) => item);
            dispatch(setTag(tags))
      };
      const handleReset = () => {
            setVisible(false);
            dispatch(setNull());
      }
      return (<>
            <ScrollView>
                  <View style={{ width: width, flex: 1, height: height * 0.8, alignItems: "center", }}>
                        <View style={styles.post}>
                              {head != "" && <View style={styles.info}>
                                    <Text style={styles.infoText}>Yazı başlığı</Text>
                              </View>}
                              <TextInput style={styles.input} onChangeText={(text) => dispatch(setHead(text))} placeholder='Yazı başlığı ekle...' placeholderTextColor={"gray"} />
                        </View>
                        <View style={styles.selectImage}>
                              {image != "" && <Image source={{ uri: image }} style={styles.image} />}
                              <TouchableOpacity onPress={() => setSelectImg(true)} style={styles.selectImageButton}>
                                    <RenderIcon Icon={"IconCMI"} name={"image-plus"} size={30} color={themeColor.royalBlue} />
                                    <Text style={styles.buttonText}>Resim seç</Text>
                              </TouchableOpacity>
                        </View>
                        <View style={styles.post}>
                              {description != "" && <View style={styles.info}>
                                    <Text style={styles.infoText}>Yazı açıklaması</Text>
                              </View>}
                              <TextInput numberOfLines={1} onChangeText={(text) => dispatch(setDesc(text))} style={styles.input} placeholder='Yazı açıklaması ekle...' placeholderTextColor={"gray"} />
                        </View>
                        <View style={styles.post}>
                              {body != "" && <View style={styles.info}>
                                    <Text style={styles.infoText}>Yazı içeriği</Text>
                              </View>}
                              <TextInput multiline onChangeText={(text) => dispatch(setBody(text))} style={styles.input} placeholder='Yazmaya başla...' placeholderTextColor={"gray"} />
                        </View>
                        <View style={styles.post}>
                              {tag != "" && <View style={styles.info}>
                                    <Text style={styles.infoText}>Yazı etiketleri</Text>
                              </View>}
                              <TextInput numberOfLines={1} onChangeText={(text) => handleTags(text)} style={styles.input} placeholder='Virgül ile ayırarak etiketleri ekle...' placeholderTextColor={"gray"} />
                        </View>
                  </View>
            </ScrollView>
            <View style={styles.buttons}>
                  <TouchableOpacity onPress={() => handleReset()} style={styles.headButton}>
                        <RenderIcon Icon={"IconAD"} name={"closecircle"} color={themeColor.royalBlue} size={28} />
                        <Text style={styles.headButtonText}>Vazgeç</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.headButton}>
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
            width: width * 0.90,
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
            width: width * 0.50,
            height: width * 0.3,
            resizeMode: "cover",
            borderRadius: 15,
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