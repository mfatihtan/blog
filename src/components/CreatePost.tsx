import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import themeColor from '../theme/themeColor'
import { height, width } from '../theme/dimension';
import { CreatePostBody, SelectImage } from '.';

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
            height: height * 0.85,
            backgroundColor: themeColor.white,
      },
      head: {
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "gray",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: themeColor.royalBlue,
            width: width,
            alignItems: "center",
      },
      header: {
            fontSize: 26,
            fontWeight: "bold",
            color: themeColor.white,
      },
})