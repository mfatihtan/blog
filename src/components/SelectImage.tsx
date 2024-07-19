import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useDebugValue, useState } from 'react'
import { height, width } from '../theme/dimension'
import RenderIcon from './RenderIcon'
import themeColor from '../theme/themeColor'
import getImage from '../../secret'
import { useDispatch, UseDispatch } from 'react-redux'
import { setImage } from '../redux/sileces/newPostSlice'

const SelectImage = ({ setSelectImg }: any) => {
      const dispatch = useDispatch();
      const [input, setInput] = useState("");
      const [images, setImages] = useState([]);
      const handleImages = async (input: string) => {
            const data: any = await getImage(input);
            setImages(data);
      };
      const handleSelectImage = (item: any) => {
            dispatch(setImage(item));
            setSelectImg(false);
      }
      const RenderImage = React.memo(({ item }: any) => {
            return (
                  <TouchableOpacity onPress={() => handleSelectImage(item.webformatURL)} key={item.id}>
                        <Image source={{ uri: item.webformatURL }} style={styles.image} />
                  </TouchableOpacity>
            );
      });
      const renderItem = useCallback(({ item }: any) => {
            return <RenderImage item={item} />;
      }, []);
      return (
            <View style={styles.root}>
                  <View style={styles.searchView}>
                        <TextInput onChangeText={setInput} placeholder='Resim arayın...' style={styles.input} />
                        <View style={styles.searchButton}>
                              <TouchableOpacity onPress={() => handleImages(input)} disabled={input.length < 3} >
                                    <RenderIcon Icon={"IconF"} name={"search"} size={30} color={input.length < 3 ? "gray" : themeColor.royalBlue} />
                              </TouchableOpacity>
                        </View>
                  </View>
                  <View style={styles.imagesBody}>
                        <FlatList
                              numColumns={2}
                              data={images}
                              keyExtractor={(item: any) => item.id.toString()}
                              renderItem={renderItem}
                        />
                  </View>
            </View>
      )
}

export default SelectImage

const styles = StyleSheet.create({
      root: {
            flex: 1,
            width: width,
            alignItems: "center",
      },
      searchView: {
            borderWidth: 1,
            borderColor: "gray",
            flexDirection: "row",
            width: width * 0.90,
            borderRadius: 30,
            marginVertical: 10,
      },
      input: {
            width: width * 0.7,
            padding: 15,
      },
      searchButton: {
            width: width * 0.20,
            alignItems: "center",
            justifyContent: "center",
      },
      imagesBody: {
            width: width,
            flex: 1,
      },
      image: {
            width: width * 0.45,
            height: height * 0.25,
            marginVertical: width * 0.025,
            marginHorizontal: width * 0.025,
            borderRadius: 15,
      },
})