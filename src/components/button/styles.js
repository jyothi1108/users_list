import {StyleSheet} from 'react-native';
import ColorConstants from '../../utility/ColorConstants';

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16, 
        backgroundColor: ColorConstants.BLUE, 
        width: '90%', 
        borderRadius: 5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: 20 
    },
    buttonText: {
        fontWeight: '500', 
        fontSize: 16, 
        color: ColorConstants.WHITE  
    }
  });

export default styles