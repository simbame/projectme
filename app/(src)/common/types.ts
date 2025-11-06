export interface User {
  username: string;
  email: string;
  password: string;
}

export type Inputs = {
  email: string;
  password: string;
};

export interface LocalStorageUser {
  // username: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
  // Add any additional properties you need for local storage
}
