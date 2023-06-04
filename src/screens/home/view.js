
import * as React from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Fontisto';
import ColorConstants from '../../utility/ColorConstants';
import IconButton from '../../components/iconButton/IconButton';


const HomeView = (props) => {
    const { navigation, usersList } = props;

    const Item = ({ user }) => {
        return (
            <View style = {styles.userItemMainContainer}>
                <View style={styles.userListItemContainer}>
                    <View style={styles.userContentContainer}>
                        <Icon name={user.gender == "male" ? "male" : "female"} size={24} color={ColorConstants.GREY} />
                        <Text style={{ marginLeft: 10, fontSize: 14 }}>{user.name}</Text>
                        {
                            user.status == "inactive" ?
                            <Text style = {styles.inactiveText}>({user.status})</Text>
                            :
                            <Text style = {styles.activeText}>({user.status})</Text>
                        }
                    </View>
                    <View style={styles.userContentContainer}>
                        <IconButton 
                            iconName={"account-edit-outline"} 
                            color={ColorConstants.BLUE}
                            onPress = {()=>navigation.navigate('EditUserInfo', {
                                userId: user?.id,
                              })}
                        />
                    </View>
                </View>
                <View style= {styles.userEmailContainer}>
                    <Text style = {styles.emailText}>{user?.email}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userHeaderContainer}>
                <Text style={styles.userHeaderText}>Users</Text>
            </View>
            <FlatList
                data={usersList}
                renderItem={({ item }) => <Item user={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}


export default HomeView;