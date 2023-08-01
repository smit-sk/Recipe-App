import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    backgroundColor: '#ffffff',
    paddingTop:60,
    paddingHorizontal:10,
  },
  subContainer: {
    // alignItems:'flex-start',
    padding: 20,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingBottom: 70,
  },
  label: {
    paddingBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#eeeeee',
  },
  centerButton: {
     alignSelf:'center'
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#008080',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  buttonText: {
    color: '#008080',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical:20,
  },
  forgotPasswordText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    textAlign:'center',
  },
});
