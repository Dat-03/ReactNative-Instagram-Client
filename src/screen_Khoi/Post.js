import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import React, { useState } from 'react';

const Post = () => {
    const [text, setText] = useState('');

    const handleTextChange = inputText => {
        setText(inputText);
    };
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.txtSttPost}>Post Status</Text>

                <TouchableOpacity style={Styles.btnPost}>
                    <Text style={Styles.txtPost}>Post</Text>
                </TouchableOpacity>

            </View>
            <View style={Styles.information}>
                <Image
                    style={Styles.imgAvatar}
                    source={require('../Image_Dat/quocdat.jpg')}></Image>
                <Text style={Styles.txtName}>Quocdat_03</Text>
            </View>
            <TextInput
                style={Styles.NoteStyle}
                multiline={true}
                value={text}
                onChangeText={handleTextChange}
                placeholder="Digital "
            />
            <View style={Styles.Body}>
                <TouchableOpacity>
                    <Image
                        style={Styles.imgAdd}
                        source={require('../image_Khoi/Add.png')}
                    />
                    
                </TouchableOpacity>
                <Text style={Styles.txtAdd}>Add Image</Text>
            </View>

        </View>
    );
};

export default Post;
const Styles = StyleSheet.create({
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
    txtSttPost: {
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 18,
        color: '#000000',
    },
    txtPost: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,
        color: '#ffffff',
    },
    btnPost: {
        backgroundColor: '#1877F2',
        width: 58,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
    ,
    btnBack: {
        width: 58,
        height: 28,
        justifyContent: 'center',
        borderRadius: 5,
    }
    ,
    information: {
        flexDirection: 'row',
        alignItems: 'center', paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: 92,
        borderColor:'#00000030',
        borderBottomWidth:1,
    },

    imgAvatar: { width: 56, height: 56, borderRadius: 99 },
    txtName: { marginLeft: 15, fontSize: 20, color: 'black' },
    Body: {
        width: '100%',
        flex:1,
        backgroundColor: '#F2F1F1',
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgAdd: {
        width: 38,
        height: 38,
    },
    txtAdd: {
        width: 92,
        textAlign: 'center',
        fontSize: 16,
        color: '#8A8484',
    },
    NoteStyle: {
        width: '100%',
        height: 120,
        paddingHorizontal: 12,
        paddingVertical: 8,
        textAlignVertical: 'top',
        backgroundColor:'#fff',
    }
});
