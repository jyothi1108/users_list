
import React, { useEffect, useState } from 'react';
import EditUserInfoView from './view'
import Loader from '../../components/loader/Loader'

const EditUserInfoScreen = ({ navigation, route }) => {
    const { userId } = route?.params;
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        status: '',
        gender: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            fetch(`https://gorest.co.in/public-api/users/${userId}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const detail = data?.data
                    setUserInfo({
                        name: detail?.name,
                        email: detail?.email,
                        status: detail?.status,
                        gender: detail?.gender
                    })
                    setLoading(false)
                })
        }

    }, [userId])

    const onChangeText = (text, field) => {
        setUserInfo(prev => ({
            ...prev,
            [field]: text,
        }));
    }

    const updateUserInfo = () => {
        setLoading(true)
        fetch(`https://gorest.co.in/public-api/users/${userId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: userInfo?.name,
                status: userInfo?.status,
                gender: userInfo?.gender
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + ''
            },
        })
            .then((response) => response.json())
            .then(() => {
                navigation.navigate('Home');
                setLoading(false)
            });
    }

    return (
        <>
            {!loading ?
                <EditUserInfoView
                    userInfo={userInfo}
                    navigation={navigation}
                    updateUserInfo={updateUserInfo}
                    onChangeText={onChangeText}
                />
                :
                <Loader />
            }
        </>
    );
}


export default EditUserInfoScreen;