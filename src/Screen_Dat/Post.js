import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'



const Post = () => {
    const [text, setText] = useState('');
    const handleTextChange = (inputText) => {
        setText(inputText);
    };
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}></StatusBar>
            <View style={styles.viewheader}>
                <TouchableOpacity style={{ width: 66 }}>
                    <Image source={require('../Image_Dat/Back.png')} />
                </TouchableOpacity>
                <Text style={styles.textPS}>Post Status</Text>
                <TouchableOpacity style={styles.btnPost}>
                    <Text style={styles.btnlabelPost}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 20, backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 60, height: 60 }}
                    source={require('../Image_Dat/avt1.png')} />
                <Text style={{ marginStart: 20, fontSize: 20, fontWeight: '400', color: '#000000' }}>Yasuo</Text>
            </View>
            <View style={{ backgroundColor: '#ffffff' }}>
                <TextInput style={styles.textInput}
                    multiline
                    numberOfLines={2}
                    value={text}
                    onChangeText={handleTextChange}
                    placeholder='What on your mind?' />
            </View>
            <View style={{ backgroundColor: '#FAFAFA', justifyContent: 'center', alignItems: 'center', paddingVertical: 150 }}>
                <TouchableOpacity>
                    <Image source={require('../Image_Dat/Icon_Add.png')} />
                </TouchableOpacity>

                <Text>Add Image</Text>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 44,
        justifyContent: 'space-between',
        backgroundColor: '#FAFAFA'
    },
    textPS: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    btnPost: {
        width: 64,
        height: 32,
        borderRadius: 6,
        backgroundColor: '#1877F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnlabelPost: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
    },
})