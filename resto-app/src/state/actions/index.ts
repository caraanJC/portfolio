import { ActionType } from '../action-types';

interface AddItem {
  type: ActionType.ADD_ITEM;
  payload: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  };
  payload2: string;
}
interface EditItem {
  type: ActionType.EDIT_ITEM;
  payload: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  };
  payload2: string;
}
interface DeleteItem {
  type: ActionType.DELETE_ITEM;
  payload: string;
}

interface InitializeCategories {
  type: ActionType.INITIALIZE_CATEGORIES;
  payload: string[];
}

interface AddCategory {
  type: ActionType.ADD_CATEGORY;
  payload: string;
}

interface DeleteCategory {
  type: ActionType.DELETE_CATEGORY;
  payload: string;
}

interface SetSelectedCategory {
  type: ActionType.SET_SELECTED_CATEGORY;
  payload: string;
}

interface SetCartCount {
  type: ActionType.SET_CART_COUNT;
  payload: number;
}

interface AddCartItem {
  type: ActionType.ADD_CART_ITEM;
  payload: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
    count: number;
  };
}
interface IncreaseCartItem {
  type: ActionType.INCREASE_CART_ITEM;
  payload: string;
}
interface DecreaseCartItem {
  type: ActionType.DECREASE_CART_ITEM;
  payload: string;
}
interface DeleteCartItem {
  type: ActionType.DELETE_CART_ITEM;
  payload: string;
}
interface EmptyCart {
  type: ActionType.EMPTY_CART;
}
interface EditCartItemPrice {
  type: ActionType.EDIT_CART_ITEM_PRICE;
  payload: string;
  payload2: number;
}

interface SetTotal {
  type: ActionType.SET_TOTAL;
  payload: number;
}

interface SetIsAdmin {
  type: ActionType.SET_IS_ADMIN;
  payload: boolean;
}

export type ActionItems = AddItem | EditItem | DeleteItem;
export type ActionCategories =
  | InitializeCategories
  | AddCategory
  | DeleteCategory;
export type ActionSelectedCategory = SetSelectedCategory;
export type ActionCartCount = SetCartCount;
export type ActionCartItems =
  | AddCartItem
  | DecreaseCartItem
  | DeleteCartItem
  | IncreaseCartItem
  | EmptyCart
  | EditCartItemPrice;

export type ActionTotal = SetTotal;
export type ActionIsAdmin = SetIsAdmin;
