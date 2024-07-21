import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RenderIcon from './RenderIcon'
import { width } from '../theme/dimension'
import themeColor from '../theme/themeColor'

const HomeHeader = ({ changeStyle, style }: any) => {
      return (
            <View style={styles.head}>
                  <Text style={styles.headText}>Son Blog Gönderileri</Text>
                  <View style={styles.headButton}>
                        <TouchableOpacity onPress={() => changeStyle(1, "list")} style={[styles.button, style == "list" && { backgroundColor: themeColor.royalBlue }]}>
                              <RenderIcon Icon={"IconFA"} name={"th-list"} size={30} color={style == "grid" ? themeColor.royalBlue : "white"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeStyle(2, "grid")} style={[styles.button, style == "grid" && { backgroundColor: themeColor.royalBlue }]}>
                              <RenderIcon Icon={"IconF"} name={"grid"} size={30} color={style == "list" ? themeColor.royalBlue : "white"} />
                        </TouchableOpacity>
                  </View>
            </View>
      )
}

export default HomeHeader

const styles = StyleSheet.create({
      head: {
            width: width,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f1f1f1",
      },
      headText: {
            fontSize: 18,
            fontWeight: "600",
            color: "black",
      },
      headButton: {
            flexDirection: "row",
      },
      button: {
            marginLeft: 10,
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
      },
})