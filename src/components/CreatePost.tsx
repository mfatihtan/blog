import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import themeColor from '../theme/themeColor'
import { height, width } from '../theme/dimension';
import { CreatePostBody, RenderIcon, SelectImage } from '.';

const CreatePost = ({ visible, setVisible }: any) => {
      const [selectImg, setSelectImg] = useState(false);
      return (
            <Modal
                  animationType="slide"
                  visible={visible}
                  statusBarTranslucent
                  onRequestClose={() => setVisible(false)}
                  transparent
            >
                  <View style={styles.root}>
                        <View style={styles.body}>
                              <View style={styles.head}>
                                    {selectImg && <TouchableOpacity onPress={() => setSelectImg(false)} style={styles.headButton}>
                                          <RenderIcon Icon={"IconAD"} name={"closecircle"} color={themeColor.white} size={28} />
                                    </TouchableOpacity>}
                                    <Text style={styles.header}>{selectImg ? "Resim seç" : "Gönderi oluştur"}</Text>
                              </View>
                              {selectImg ? <SelectImage setSelectImg={setSelectImg} /> : <CreatePostBody setVisible={setVisible} setSelectImg={setSelectImg} />}
                        </View>
                  </View>
            </Modal>
      )
}

export default CreatePost

const styles = StyleSheet.create({
      root: {
            flex: 1,
            justifyContent: "flex-end",
      },
      body: {
            alignItems: "center",
            height: height,
            backgroundColor: themeColor.white,
      },
      head: {
            padding: 10,
            backgroundColor: themeColor.royalBlue,
            width: width,
            alignItems: "center",
      },
      header: {
            fontSize: 26,
            fontWeight: "bold",
            color: themeColor.white,
      },
      headButton: {
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            left: 10,
            top: 10,
      },
})