
import app from "./config";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const db = getFirestore(app); 

export async function fetchRecipeFirestore() {

    const recipeRef = collection(db, 'recipes');
    const querySnapshot = await getDocs(recipeRef);
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    });
    return fetchedData
  };

  export async function fetchRecipebyIdFirestore(id) {

    const recipeRef = collection(db, 'recipes');
    const querySnapshot = await getDocs(recipeRef);
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      if (id === doc.data().userId) {
        fetchedData.push({ id: doc.id, ...doc.data() });
      }
    });
    console.log("Data By Id " , fetchedData);
    return fetchedData
  };
