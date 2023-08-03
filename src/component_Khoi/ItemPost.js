import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

import Modal from "react-native-modal"

const ItemPost = (props) => {
    const { data } = props;
    const [isLike, setisLike] = useState(false);
    const [isSaved, setisSaved] = useState(false);
    const [numsofLike, setnumsofLike] = useState(201102);

    const [visible, setvisible] = useState(false);

    const inBeta = () => {
        ToastAndroid.show('Tính năng đang phát triển', ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imgProfile} source={require('../Image_Dat/quocdat.jpg')} />
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.usernamePost}>Quocdat_03</Text>
                            <Image Image style={{ width: 10, height: 10, marginTop: 3 }} source={require('../image_Khoi/official_icon.png')} />
                        </View>
                        <Text style={styles.placeText}>Vietnam, Binh Phuoc</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setvisible(true)} style={{ height: 24, justifyContent: 'center' }}>
                    <Image source={require('../image_Khoi/More.png')} />
                </TouchableOpacity>
            </View>
            <Image style={styles.imgPost} source={data?.images} />
            <View style={styles.actionView}>
                <View style={{ flexDirection: 'row', width: 75, justifyContent: 'space-between', paddingHorizontal: 4 }}>
                    {
                        isLike ?
                            <TouchableOpacity onPress={() => { setisLike(false), setnumsofLike(numsofLike - 1) }}>
                                <Image style={styles.likeIcon} source={require('../image_Khoi/Like.png')} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { setisLike(true), setnumsofLike(numsofLike + 1) }}>
                                <Image source={require('../image_Khoi/nonLike.png')} />
                            </TouchableOpacity>
                    }
                    <TouchableOpacity>
                        <Image source={require('../image_Khoi/Comment.png')} />
                    </TouchableOpacity>

                </View>
                {
                    isSaved ?
                        <TouchableOpacity onPress={() => setisSaved(false)}>
                            <Image style={styles.likeIcon} source={require('../image_Khoi/Saved.png')} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setisSaved(true)}>
                            <Image source={require('../image_Khoi/nonSave.png')} />
                        </TouchableOpacity>
                }
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.numsofLikeText}>{numsofLike} likes</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.usernamePost}>Quocdat_03
                        <Text style={styles.statusText}> Đạt và những đồng bọn .</Text>
                    </Text>

                </View>

            </View>

            <Modal
                style={{ width: '100%', marginLeft: 0, marginRight: 0 }}
                isVisible={visible} onBackdropPress={() => setvisible(false)}
                onBackButtonPress={() => setvisible(false)}
            >
                <View style={styles.optionView}>
                    <View style={{ paddingVertical: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', marginStart: 16 }}>
                            <Text style={styles.username}>Quocdat_03</Text>
                            <Image style={{ width: 15, height: 15, marginTop: 5 }} source={require('../image_Khoi/official_icon.png')}></Image>
                        </View>
                        <View style={styles.profileView}>
                            <Image style={styles.imgPro5} source={require("../Image_Dat/quocdat.jpg")}></Image>
                            <TouchableOpacity style={styles.imformationView}>
                                <Text style={styles.nummberText}>20</Text>
                                <Text style={styles.ttText}>Posts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imformationView}>
                                <Text style={styles.nummberText}>2.1M</Text>
                                <Text style={styles.ttText}>Followers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imformationView}>
                                <Text style={styles.nummberText}>1</Text>
                                <Text style={styles.ttText}>Following</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.name}>Quốc Đạt</Text>
                        <Text numberOfLines={2} style={styles.gtText}>Quốc Đạt nè hihi ^__^</Text>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Text style={styles.editprofileText}>Unfollow</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={styles.btmView}>

                        <TouchableOpacity onPress={inBeta} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                            <Image style={styles.btsImg} source={require('../image_Khoi/icon_bottomsheet/hide.png')} />
                            <Text style={styles.optionText} >Hidden this post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={inBeta} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                            <Image style={styles.btsImg} source={require('../image_Khoi/icon_bottomsheet/post_report.png')} />
                            <Text style={[styles.optionText, { color: 'red' }]} >Report this post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                            <Image style={styles.btsImg} source={require('../image_Khoi/icon_bottomsheet/user_report.png')} />
                            <Text style={[styles.optionText, { color: 'red' }]} >Report account</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </Modal>

        </View>


    )
}

export default ItemPost
const maxWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#0000002A',
    },
    headerView: {
        height: 54,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    imgProfile: {
        width: 36,
        height: 36,
        borderRadius: 99,
        marginEnd: 5
    },
    usernamePost: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#262626',
        marginEnd: 2
    },
    placeText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        color: '#262626',
    },
    imgPost: {
        width: maxWidth,
        height: maxWidth
    },
    actionView: {
        height: 44,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    numsofLikeText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#262626',
    },
    bottomView: {
        paddingHorizontal: 16,
        marginBottom: 15

    },
    statusText: {
        position: 'relative',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: '#262626',
        flex: 1
    },

    optionText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginStart: 10,
    },
    btmView: {
        borderTopWidth: 1,
        borderColor: '#00000060',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    optionView: {
        position: 'absolute',
        bottom: -20,
        right: 0,
        left: 0,
        height: 455,
        width: '100%',
        backgroundColor: '#fff'

    },
    btsImg: {
        width: 24,
        height: 24
    },
    username: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#262626',
        marginEnd: 3
    },
    profileView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    profileText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',

    },
    imformationView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgPro5: {
        width: 96,
        height: 96,
        borderRadius: 99
    },
    nummberText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    ttText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        color: '#4E4B66',

    },
    name: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10,
        marginStart: 20
    },
    gtText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        color: '#4E4B66',
        width: Dimensions.get('window').width - 150,
        marginStart: 20
    },
    btnEdit: {
        marginTop: 15,
        marginHorizontal: 20,
        borderWidth: 1,
        height: 36,
        borderRadius: 6,
        borderColor: '#0000005A',
        justifyContent: 'center',
        alignItems: 'center'

    },
    editprofileText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#262626',
    },



})