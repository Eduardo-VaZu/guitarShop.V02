
type TGuitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

type TCartItem = Pick<TGuitar, 'id' | 'name' | 'image' | 'price'> & {
  quantity: number;
}

type THeaderCartProps = {
  cart: TCartItem[],
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
  removeFromCart: (id: number) => void,
  voidCart: () => void,
  isEmpty: boolean,
  cartTotal: number
} 

export type { TGuitar, TCartItem, THeaderCartProps };
