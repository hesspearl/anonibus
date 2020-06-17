import React from 'react'
import { Modal, Portal,Text,TextInput, Button} from 'react-native-paper';
import{View , StyleSheet} from "react-native"





const ModalMsg= props =>{

return (
    
    <Portal>
    
    <Modal visible={props.visible}>
    <View style={styles.container}>
      <Text>Example Modal</Text>
      <View style={{flexDirection:"row"}}>
      <TextInput style={{
            width:270,
            height:50,
            margin:5,
            backgroundColor:"white" }} 
            onChangeText={props.onChangeText} label="send a message" mode="outline"/>
      <Button
        mode="outlined" 
        onPress={props.save}
        style={styles.btn}
      >
          send
      </Button>
      </View>
      </View>
    </Modal>
 
  </Portal>

)
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"white",
          alignItems:"center", 
          height:110,
          padding:5,
          borderRadius: 100
        },
        btn:{
            margin:10 ,
             alignSelf:"flex-end" 
            }
})
export default ModalMsg;