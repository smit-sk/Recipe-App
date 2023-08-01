import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor: '#ffffff',
        padding: 20,
      },
      header: {
        fontSize: 35,
        fontWeight:'bold',
        paddingBottom : 70
      },
      label:{
        paddingBottom : 10

      },
      forgotContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 15,
      },
      forgotText: {
        color: '#afafaf',
        fontWeight: '700',
      },
      input: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor : '#eeeeee'
      },
      buttonContainer: {
        width:'100%',
        backgroundColor: '#008080',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
      },
      signupContainer : {
        flexDirection : 'row',
        alignSelf:'center',
        marginTop: 15,
      },
      donthaveText : {
        color:'black'
      },
      signupText:{  
        color :'#008080',
        fontWeight:'bold',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
      },
      errorText: {
        color: "red",
        fontSize: 14,
        paddingBottom:10,
      },
})