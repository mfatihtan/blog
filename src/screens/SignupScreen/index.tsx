import React from 'react';
import themeColor from '../../theme/themeColor';
import { width, height } from '../../theme/dimension';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Index = () => {
      return (
            <SafeAreaView style={styles.root}>
                  <View style={styles.head}>
                        <Text>Kayıt ol</Text>
                  </View>
            </SafeAreaView>
      )
}

export default Index

const styles = StyleSheet.create({
      root: {
            flex: 1,
            backgroundColor: themeColor.royalBlue,
      },
      head: {
      },
})