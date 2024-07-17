import { Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import themeColor from '../../theme/themeColor'
import { CreatePostButton, CreatePost } from '../../components'
import { height, width } from '../../theme/dimension'

const Index = () => {
      const [visible, setVisible] = useState(false);
      return (
            <View style={styles.root}>
                  <StatusBar translucent barStyle={"light-content"} backgroundColor={"transparent"} />
                  <CreatePostButton onPress={() => setVisible(true)} />
                  <CreatePost visible={visible} setVisible={setVisible} />
            </View>
      )
}

export default Index

const styles = StyleSheet.create({
      root: {
            flex: 1,
            backgroundColor: themeColor.white,
      },
})