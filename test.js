let newCart = [];
if (user.cart.length === 0) {
  newCart.push({ ...item, quantity: 1 });
} else {
  newCart = user.cart.map((state) => {
    if (state.id === item.id) {
      return { ...state, quantity: state.quantity + 1 };
    } else {
      console.log(state);
      return state;
    }
  });
}
