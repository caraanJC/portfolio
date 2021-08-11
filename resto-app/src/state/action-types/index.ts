export enum ActionType {
  ADD_ITEM = 'addItem',
  DELETE_ITEM = 'deleteItem',
  EDIT_ITEM = 'editItem',

  INITIALIZE_CATEGORIES = 'initializeCategories',
  ADD_CATEGORY = 'addCategory',
  DELETE_CATEGORY = 'deleteCategory',

  SET_SELECTED_CATEGORY = 'setSelectedCategory',

  SET_CART_COUNT = 'setCartCount',

  ADD_CART_ITEM = 'addCartItem',
  INCREASE_CART_ITEM = 'increaseCartItem',
  DECREASE_CART_ITEM = 'decreaseCartItem',
  DELETE_CART_ITEM = 'deleteCartItem',
  EDIT_CART_ITEM_PRICE = 'editCartItemPrice',
  EMPTY_CART = 'emptyCart',

  SET_TOTAL = 'setTotal',

  SET_IS_ADMIN = 'setIsAdmin',
}
