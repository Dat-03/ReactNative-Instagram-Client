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
import ItemSearchUser from '../Component_Dat/ItemSearchUser';



const SearchAcount = (props) => {
  const { navigation } = props;
  const goBack = () => {
    navigation.goBack();
}
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={{width:20,height:36,justifyContent:'center'}}>
          <Image source={require('../Image_Dat/Back.png')} />
        </TouchableOpacity>
        <View style={styles.searchView}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../Image_Dat/Search.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor={'white'}
          />
        </View>
      </View>
      <View style={{flex:1,paddingHorizontal:20,backgroundColor:'#fff'}}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemSearchUser data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchAcount;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:54,
    paddingHorizontal: 20,
    alignItems: 'center'
},
  searchView: {
    width: '92%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#BBBBC3',
    marginStart: 10,
  },
  textInput: {
    height: 36,
    width: '92%',
    padding: 5,
  },
});

const data = [
  {
    id: '1',
    images: require('../Image_Dat/dat1.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '2',
    images: require('../Image_Dat/dat2.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '3',
    images: require('../Image_Dat/dat3.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '4',
    images: require('../Image_Dat/dat4.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '5',
    images: require('../Image_Dat/dat5.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '6',
    images: require('../Image_Dat/dat6.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '7',
    images: require('../Image_Dat/dat7.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '8',
    images: require('../Image_Dat/dat8.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '9',
    images: require('../Image_Dat/dat9.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '10',
    images: require('../Image_Dat/dat10.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '11',
    images: require('../Image_Dat/dat11.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },
  {
    id: '12',
    images: require('../Image_Dat/dat12.jpg'),
    username: 'Quocdat_03',
    title:'Quốc Đạt nè hihi ^__^',
  },

];
