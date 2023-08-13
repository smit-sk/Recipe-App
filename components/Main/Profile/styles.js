import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  profileIcon: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 50,
    paddingTop:30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
  },
  subContainer: {
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#008080',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'600'
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});
