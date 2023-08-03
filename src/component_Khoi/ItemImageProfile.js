import { View, Text,Dimensions,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const ItemImageProfile = (props) => {
    const{data}=props;
    const itemWidth = Dimensions.get('window').width / 3;
  return (
    <TouchableOpacity
            style={{
              width: itemWidth,
              height: itemWidth,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={data.images}
              style={{width: itemWidth - 1.5, height: itemWidth - 1.5}}
            />
          </TouchableOpacity>
  )
}

export default ItemImageProfile