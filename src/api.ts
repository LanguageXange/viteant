export const getOrders = async () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };
  
  export const getRevenue = async () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getInventory = async () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  
  export const getCustomers =  async () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  export const getComments = async () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };