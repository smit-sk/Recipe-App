import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    
  },

    container: {
        flex: 1,
        padding:15,
        backgroundColor: '#fff',
      },
      myRecipeView:{
        height:'100%'
      },
      feedContainer: {
        paddingVertical: 16,
      },
      recipeContainer: {
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginBottom: 16,
        paddingBottom:16,
        overflow: 'hidden',
      },
      recipeImage: {
          width: '100%',
          height:200,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        titleContainer : {
          paddingTop:10,
          flexDirection: 'row',
          alignItems: 'center',
           justifyContent: 'space-between',
           paddingHorizontal : 16
        },
      recipeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    
        marginTop: 10,
      },
      recipeDescription: {
        fontSize: 16,
        marginHorizontal: 16,
        marginBottom: 10,
      },
});

export default styles;
