import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: 286,
        height: 143,
        backgroundColor: '#334FFA',
        borderRadius: 20,
        paddingHorizontal: 19,
        paddingVertical: 21
    },
    date: {
        color: '#FFFFFF',
        fontFamily: 'Avenir-Black',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '800'
    },
    points:{
        color: "#FFFFFF",
        textAlign: 'center',
        fontFamily: 'Avenir-Black',
        fontSize: 32,
        lineHeight: 44,
        marginTop: 7
    }
})