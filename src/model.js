import { ref, onValue, update, get } from 'firebase/database';
import { db } from './firebase';

export const fetchDataList = (setData) => {
  const dataRef = ref(db, 'Array');
  onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
          const dataArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key]
          }));
          setData(dataArray);
      } else {
          setData([]);
      }
  });
};
export const fetchProductById = async (id) => {
  try {
      const itemRef = ref(db, `Array/${id}`);
      const snapshot = await get(itemRef);
      if (snapshot.exists()) {
          return snapshot.val();
      } else {
          console.log('No data available for the given ID');
          return null;
      }
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};

export const updateProductField = async (id, field, newValue) => {
  try {
      const itemRef = ref(db, `Array/${id}`);
      await update(itemRef, { [field]: newValue });
  } catch (error) {
      console.error('Error updating data:', error);
      throw error;
  }
};