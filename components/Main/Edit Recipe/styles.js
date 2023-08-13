import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop:60,
  },
  appBar:{
    flexDirection : 'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom : 10
  },
  container:{
    paddingTop:10,
  },  
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  imageView:{
    width : '100%',
    height : 200,
    borderRadius: 15,
    flex :1 ,
    justifyContent:'center',
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  inputLarge: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#008080',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


 export default styles;