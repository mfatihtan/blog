import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import themeColor from '../theme/themeColor'
import { height, width } from '../theme/dimension'
import RenderIcon from './RenderIcon'

const CreatePost = ({ visible, setVisible }: any) => {
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
                                    <Text style={styles.header}>Gönderi oluştur</Text>
                              </View>
                              <View style={styles.selectImage}>
                                    <TouchableOpacity style={styles.selectImageButton}>
                                          <RenderIcon Icon={"IconCMI"} name={"image-plus"} size={30} color={themeColor.royalBlue} />
                                          <Text style={styles.buttonText}>Resim seç</Text>
                                    </TouchableOpacity>
                              </View>
                              <View style={styles.post}>
                                    <TextInput multiline style={styles.input} placeholder='Yazmaya başla...' placeholderTextColor={"gray"} />
                              </View>

                              <View style={styles.buttons}>
                                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.headButton}>
                                          <RenderIcon Icon={"IconAD"} name={"closecircle"} color={themeColor.royalBlue} size={28} />
                                          <Text style={styles.headButtonText}>Vazgeç</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.headButton}>
                                          <Text style={styles.headButtonText}>Paylaş</Text>
                                          <RenderIcon Icon={"IconCMI"} name={"send-circle"} color={themeColor.royalBlue} size={34} />
                                    </TouchableOpacity>
                              </View>
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
            width: width,
            padding: 10,
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
      post: {
            marginVertical: 20,
            padding: 10,
            width: width * 0.9,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "lightgray",
            backgroundColor: themeColor.white,
      },
      input: {
            padding: 10,
            fontSize: 18,
            fontWeight: "500",
            color: "black",
      },
      selectImage: {
            padding: 20,
            width: width,
      },
      selectImageButton: {
            flexDirection: "row",
            alignItems: "center",
            width: 100,
      },
      buttonText: {
            marginRight: 5,
            fontSize: 18,
            fontWeight: "500",
            color: "gray",
      },
      buttons: {
            width: width,
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 20,
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