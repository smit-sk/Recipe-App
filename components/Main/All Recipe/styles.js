import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:15,
      backgroundColor: '#fff',
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
      
    recipeTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginHorizontal: 16,
      marginTop: 10,
    },
    recipeDescription: {
      fontSize: 16,
      marginHorizontal: 16,
      marginBottom: 10,
    },
  });
  
  export default styles;
  