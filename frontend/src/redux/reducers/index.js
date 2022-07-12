import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, categoryReducer, handleCard, sortReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  category: categoryReducer,
  handleCard,
  sortReducer
});
export default reducers;
