import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  SetStateAction,
} from "react";
import { db } from "../../utils/firebase-config";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { useDisplayOptionsContext } from "./DisplayOptions";

export type ProductType = {
  id: string;
  franchise: string;
  category: string;
  name: string;
  set: string;
  price: number;
  image: string;
  quantity: number;
};

export type ProductsType = ProductType[];

type DataContextProviderProps = {
  children: JSX.Element;
};

type DataContextType = {
  products: ProductsType;
  productsSet: React.Dispatch<SetStateAction<ProductsType>>;
};

export const DataContext = createContext<DataContextType>({
  products: [],
  productsSet: () => undefined,
});

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [products, productsSet] = useState<ProductsType>([]);
  const { numberOfItems } = useDisplayOptionsContext();

  useEffect(() => {
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const getProducts: any = onSnapshot(
      q,
      (querySnapshot: QuerySnapshot<DocumentData>) => {
        productsSet(
          querySnapshot.docs.map(
            (doc) =>
              ({
                ...doc.data(),
                id: doc.id,
                quantity: 1,
              } as ProductType)
          )
        );
        return getProducts;
      }
    );
  }, []);

  return (
    <DataContext.Provider value={{ products, productsSet }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
