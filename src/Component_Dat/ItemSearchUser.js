import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

const ItemSearchUser = props => {
  const { data } = props;
  return (

    <TouchableOpacity style={{ flexDirection: 'row', height: 80, alignItems: 'center' }}>
      <Image source={data.images} style={{ width: 64, height: 64, borderRadius: 99 }} />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          marginStart: 10,
          width: '90%',
          height: '90%',
          borderBottomWidth: 1, borderColor: '#00000030'
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:5 }}>
          <Text style={{ fontWeight: '600', color: '#000000', fontSize: 18 }}>
            {data.username}
          </Text>
          <Image Image style={{ width: 15, height: 15, marginTop: 2,marginStart:4 }} source={require('../image_Khoi/official_icon.png')} />
        </View>

        <Text numberOfLines={1} style={{ color: '#A3A3A3', fontSize: 14, fontWeight: '400',width:'90%' }}>{data.title}</Text>


      </View>
    </TouchableOpacity>

  );
};

export default ItemSearchUser;

const styles = StyleSheet.create({});
