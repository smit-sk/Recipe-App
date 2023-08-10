import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  recipeImage: {
    width: '100%',
    height: 0.3 * Dimensions.get('window').height,
    resizeMode: 'cover',
  },
  recipeContent: {
    padding: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeDescription: {
    fontSize: 16,
  },
  backIcon: {
    position: 'relative',
    top: -220,
    left: 20,
  },
  arrowContainer: {
    backgroundColor: 'white',
    height: 35,
    width: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 8,
  },
});

export default styles;
