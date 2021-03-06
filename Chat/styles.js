import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    titlePage: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    line: {
        height: 2,
        backgroundColor: '#fff',
        width: '100%'
    },
    containerChat: {
        flex: 1,
        width: '100%'
    },
    avatar_conversa: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#777',
        marginRight: 10
      },
      scrollView: {
        backgroundColor: '#fff',
        width: '100%',
        borderTopColor: '#e6e6e6',
        borderTopWidth: 1,
     },
      linha_conversa: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        marginRight: 60,
        marginVertical: 10
      },
      ImageView:{
          width: 150,
          height: 100,
          borderRadius:5,
          borderWidth:3,
          borderColor:"white"
      },
      textBubble:{
          flex:1,
          marginVertical:5,
          backgroundColor:"white",
          padding:10,
          borderRadius:10
      }
})