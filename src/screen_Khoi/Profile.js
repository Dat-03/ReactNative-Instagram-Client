import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView, ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'

import MyPostTab from '../component_Khoi/MyPostTab';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import MyBookmarkTab from '../component_Khoi/MyBookmarkTab';
import Modal from "react-native-modal";

const Profile = (props) => {
    const { navigation } = props;
    const gotoEditProfile = () => {
        navigation.navigate('EditProfile');
    }
    const [visible, setvisible] = useState(false);
    const inBeta = () => {
        ToastAndroid.show('Tính năng đang phát triển', ToastAndroid.SHORT);
    }

    const MyPostRoute = () => (
        <MyPostTab />
    );

    const MyBookmarkRoute = () => (
        <MyBookmarkTab />
    );
    const renderScene = SceneMap({
        mypost: MyPostRoute,
        mybookmark: MyBookmarkRoute,
    });
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'mypost', image: require('../image_Khoi/MyPost.png') },
        { key: 'mybookmark', image: require('../image_Khoi/Bookmark.png') },

    ]);
    const CustomTabBarImage = ({ source, focused }) => {
        return (
            <Image source={source} style={{ width: 24, height: 24, tintColor: focused ? '#000000' : '#00000040' }} />
        );
    };
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#262626' }}
            style={{ backgroundColor: 'transparent' }}
            indicatorContainerStyle={{ borderTopWidth: 1, borderColor: '#0000008A' }}
            renderIcon={({ route, focused }) => (
                <CustomTabBarImage source={route.image} focused={focused} />
            )}
            pressColor='transparent'
        />
    );
    return (

        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.username}>Quocdat_03</Text>
                    <Image style={{ width: 15, height: 15, marginTop: 5 }} source={require('../image_Khoi/official_icon.png')}></Image>
                </View>

                <TouchableOpacity onPress={() => setvisible(true)}>
                    <Image source={require('../image_Khoi/Menu.png')}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.profileView}>
                <Image style={styles.imgProfile} source={require("../Image_Dat/quocdat.jpg")}></Image>
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
            <View style={{ backgroundColor: '#fff' }}>
                <Text style={styles.name}>Quốc Đạt</Text>
                <Text numberOfLines={2} style={styles.gtText}>Hí anh em Quốc Đạt nè hihi ^__^</Text>
                <TouchableOpacity style={styles.btnEdit} onPress={gotoEditProfile}>
                    <Text style={styles.editprofileText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabView}>
                <TabView
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}

                />
            </View>


            <Modal
                style={{ width: '100%', marginLeft: 0, marginRight: 0 }}
                isVisible={visible} onBackdropPress={() => setvisible(false)}
                onBackButtonPress={() => setvisible(false)}

            >
                <View style={styles.optionView}>
                    <View style={{ padding: 20 }}>


                        <TouchableOpacity onPress={inBeta} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                            <Image source={require('../image_Khoi/icon_bottomsheet/settings.png')} />
                            <Text style={styles.optionText} >Setting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={inBeta} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                            <Image source={require('../image_Khoi/icon_bottomsheet/your_active.png')} />
                            <Text style={styles.optionText} >Your activity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                            <Image source={require('../image_Khoi/icon_bottomsheet/change_password.png')} />
                            <Text style={styles.optionText} >Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                            <Image source={require('../image_Khoi/icon_bottomsheet/logout.png')} />
                            <Text style={styles.optionText} >Log out</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomView}>
                        <Image source={require("../image_Khoi/Instagram_Logo.png")}></Image>
                        <Text style={styles.optionText}>Dev by Dat</Text>
                    </View>

                </View>


            </Modal>


        </View>


    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerView: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
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
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
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
    imgProfile: {
        width: 100,
        height: 100,
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
    tabView: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    optionText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginStart: 10,
    },
    bottomView: {
        borderTopWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    optionView: {
        position: 'absolute',
        bottom: -20,
        right: 0,
        left: 0,
        height: 350,
        width: '100%',
        backgroundColor: '#fff'

    }

})