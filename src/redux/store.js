import { createStore} from 'redux'; 
import reducer from './reducer.js'; 


const store = createStore(reducer); // Esta linea nos permite hacer peticiones a un servidor


export default store;