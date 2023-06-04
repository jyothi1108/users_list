import {StyleSheet} from 'react-native';
import ColorConstants from '../../utility/ColorConstants';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    userListItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    userHeaderContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userHeaderText: {
        fontSize: 18, 
        fontWeight: '600', 
        color: ColorConstants.BLUE 
    },
    userItemMainContainer:{
        borderWidth: 0.2,
        borderColor: ColorConstants.BLUE,
        width: '90%', 
        padding: 16, 
        marginVertical: 10,  
        alignSelf: 'center', 
        borderRadius: 5,
    },
    userContentContainer:{
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    userEmailContainer:{
        flexDirection: 'row', 
        paddingHorizontal: 6
    },
    emailText:{
        fontSize: 12, 
        color: ColorConstants.GREY
    },
    inactiveText:{
        color: ColorConstants.RED, 
        marginHorizontal: 3, 
        fontWeight: '500', 
        fontSize: 12
    },
    activeText:{
        color: ColorConstants.GREEN, 
        marginHorizontal: 3,
        fontWeight: '500', 
        fontSize: 12
    }

  });

  export default styles