import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width; // get current width
const SCALE = 325; // constant, 325 is standard width of  iphone 5 

export const scaleFontSize = (fontSize) => {
  const ratio = fontSize / SCALE; // get ratio based on your standard scale 
  const newSize = Math.round(ratio * SCREEN_WIDTH);
  return newSize; 
}
