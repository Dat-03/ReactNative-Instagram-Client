import { FlatList, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ItemNotification from '../Component_Dat/ItemNotification';






const Notification = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: '900', color: '#000000' }}>Notifications</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemNotification data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  header: {
    height: 54,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
})

const data = [
  {
    id: '1',
    images: require('../Image_Dat/quocdat.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '2',
    images: require('../Image_Dat/hoang.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '3',
    images: require('../Image_Dat/dung.png'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '4',
    images: require('../Image_Dat/dung1.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '5',
    images: require('../Image_Dat/huy.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '6',
    images: require('../Image_Dat/huy1.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '7',
    images: require('../Image_Dat/lam.png'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '8',
    images: require('../Image_Dat/thanh.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '9',
    images: require('../Image_Dat/thu.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '10',
    images: require('../Image_Dat/tuyen.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '11',
    images: require('../Image_Dat/hoang.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },
  {
    id: '12',
    images: require('../Image_Dat/tuyen.jpg'),

    username: 'Quocdat_03',
    title: 'Hí anh em Quốc Đạt nè hihi ^__^',
  },

];
