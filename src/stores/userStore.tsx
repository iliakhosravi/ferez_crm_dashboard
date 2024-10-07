import { createContext, FC, ReactNode, useState } from "react";

export interface iUser {
  id: number;
  name?: string;
  email?: string;
  phone: string;
  image?: string;
  created_at: string;
  updated_at: string;
  is_industrial: boolean;
  wallet: string;
  brand?: string;
}

interface IUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
}

export const UserStore = createContext<IUserContext | undefined>(undefined);

const UserStoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<iUser | null>(null);

  return (
    <UserStore.Provider value={{ user, setUser }}>
      {children}
    </UserStore.Provider>
  );
};

export default UserStoreProvider;
