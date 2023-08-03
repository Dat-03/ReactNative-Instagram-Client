import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemSearch from '../Component_Dat/ItemSearch';



const data = [
    {
        id: '1',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '2',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '3',
        images: require('../Image_Dat/Search3.png'),
    },
    {
        id: '4',
        images: require('../Image_Dat/Search4.png'),
    },
    {
        id: '5',
        images: require('../Image_Dat/Search5.png'),
    },
    {
        id: '6',
        images: require('../Image_Dat/Search6.png'),
    },
    {
        id: '7',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '8',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '9',
        images: require('../Image_Dat/Search3.png'),
    },
    {
        id: '10',
        images: require('../Image_Dat/Search4.png'),
    },
    {
        id: '11',
        images: require('../Image_Dat/Search5.png'),
    },
    {
        id: '12',
        images: require('../Image_Dat/Search6.png'),
    },
    {
        id: '13',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '14',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '15',
        images: require('../Image_Dat/Search3.png'),
    },
    {
        id: '16',
        images: require('../Image_Dat/Search4.png'),
    },
    {
        id: '17',
        images: require('../Image_Dat/Search5.png'),
    },
    {
        id: '18',
        images: require('../Image_Dat/Search6.png'),
    },
    {
        id: '19',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '20',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '21',
        images: require('../Image_Dat/Search3.png'),
    },
];

const Search = (props) => {
    const { navigation } = props;
    const gotoSearchAccount = () => {
        navigation.navigate('SearchAccount')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchView}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../Image_Dat/Search.png')} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor={'white'}
                        onPressIn={gotoSearchAccount}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => <ItemSearch data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent:'center',
        height:54,
        paddingHorizontal: 20,
    
    },
    searchView: {
        width: '100%',
        height: 36,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#BBBBC3',

    },
    textInput: {
        height: 32,
        width: "92%",
        padding: 5,
    },
});