import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
                              <Text style={styles.header}>Gönderi oluştur</Text>
                              <View style={styles.head}>
                                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.headButton}>
                                          <RenderIcon Icon={"IconAD"} name={"closecircle"} color={"white"} size={28} />
                                          <Text style={styles.headButtonText}>Vazgeç</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.headButton}>
                                          <Text style={styles.headButtonText}>Gönder</Text>
                                          <RenderIcon Icon={"IconCMI"} name={"send-circle"} color={"white"} size={28} />
                                    </TouchableOpacity>
                              </View>
                              <View style={styles.post}>

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
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: height * 0.85,
            backgroundColor: themeColor.royalBlue,
      },
      header: {
            fontSize: 26,
            fontWeight: "bold",
            color: themeColor.white,
      },
      head: {
            width: width,
            justifyContent: "space-between",
            marginTop: 10,
            borderTopWidth: 2,
            borderColor: "lightgray",
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
            color: "white",
            fontWeight: "600",
            fontSize: 18,
            marginHorizontal: 10,
      },
      post: {
            padding: 10,
            width: width * 0.9,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "lightgray",
            backgroundColor: themeColor.white,
      },
})