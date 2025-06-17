// types/directus.ts
export interface DirectusSchema {

  Product: {
    id: string;
    title: string;
    description ? : string;
    price: number;
  };

  CartItem: {
    id: string;
    cart_id: string;
    product_variant_id: string;
    quantity: number;
  };

  Cart: {
    id: string;
    cart_item: CartItem[];
  };

  follows: {
    id: string;
    follower: string;
    following: string;
  };
  lists: {
    id: string;
    user: string;
    name: string;
  };
  list_items: {
    id: string;
    list: string;
    product: string;
  };
  posts: {
    id: string;
    user: string;
    content: string;
    created_at: string;
  };
}