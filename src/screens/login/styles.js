import {StyleSheet} from 'react-native';
import ColorConstants from '../../utility/ColorConstants';

const styles = StyleSheet.create({
    input: {
        borderColor: ColorConstants.GREY,
        width: '90%',
        padding: 16,
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 0.5
    },
    container: {
        flex: 1,
        padding: 16
    },
    formContainer:{
        flex: 0.7, 
        alignItems: 'center', 
        paddingVertical: 20
    },
    headerContainer: {
        flex: 0.3, 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },
    headerContent:{
        fontSize: 20, 
        fontWeight: '700', 
        paddingBottom: 20, 
        color: ColorConstants.BLUE
    }
  });

  export default styles