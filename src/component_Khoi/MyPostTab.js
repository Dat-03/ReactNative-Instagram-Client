import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemImageProfile from './ItemImageProfile'

const MyPostTab = () => {
  return (
    <View style={styles.container}>





      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={3}
          renderItem={({ item }) => <ItemImageProfile data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default MyPostTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})


const data = [
  {
    id: '1',
    images: require('../Image_Dat/quocdat.jpg'),

  },
  {
    id: '2',
    images: require('../Image_Dat/dat1.jpg'),
    
  },
  {
    id: '3',
    images: require('../Image_Dat/dat2.jpg'),
  },
  {
    id: '4',
    images: require('../Image_Dat/dat3.jpg'),
  },
  {
    id: '5',
    images: require('../Image_Dat/dat4.jpg'),
  },
  {
    id: '6',
    images: require('../Image_Dat/dat5.jpg'),
  },
  {
    id: '7',
    images: require('../Image_Dat/dat6.jpg'),
  },
  {
    id: '8',
    images: require('../Image_Dat/dat7.jpg'),
  },
  {
    id: '9',
    images: require('../Image_Dat/dat8.jpg'),
  },
  {
    id: '10',
    images: require('../Image_Dat/dat9.jpg'),
  },
  {
    id: '11',
    images: require('../Image_Dat/dat10.jpg'),
  },
  {
    id: '12',
    images: require('../Image_Dat/dat11.jpg'),
  },

];