import React, { createContext, useContext, useEffect, useState } from "react";

type DisplayOptionsContextProviderProps = {
  children: JSX.Element;
};

export type HandleProductsDisplayed = (page: number) => void;

export type DisplayOptionsContextType = {
  numberOfItems: string;
  numberOfItemsSet: React.Dispatch<React.SetStateAction<string>>;
  displayGrid: Boolean;
  displayGridSet: React.Dispatch<React.SetStateAction<Boolean>>;
  firstItemIndex: number;
  firstItemIndexSet: React.Dispatch<React.SetStateAction<number>>;
  lastItemIndex: number;
  lastItemIndexSet: React.Dispatch<React.SetStateAction<number>>;
  handleProductsDisplayed: HandleProductsDisplayed;
};

export const DisplayOptions = createContext<DisplayOptionsContextType>({
  numberOfItems: "12",
  numberOfItemsSet: () => undefined,
  displayGrid: true,
  displayGridSet: () => undefined,
  firstItemIndex: 0,
  firstItemIndexSet: () => undefined,
  lastItemIndex: 12,
  lastItemIndexSet: () => undefined,
  handleProductsDisplayed: () => undefined,
});

export const DisplayOptionsProvider = ({
  children,
}: DisplayOptionsContextProviderProps) => {
  const [numberOfItems, numberOfItemsSet] = useState<string>("12");
  const [displayGrid, displayGridSet] = useState<Boolean>(true);
  const [firstItemIndex, firstItemIndexSet] = useState<number>(0);
  const [lastItemIndex, lastItemIndexSet] = useState<number>(12);

  const handleProductsDisplayed: HandleProductsDisplayed = (page) => {
    if (page > 1) {
      firstItemIndexSet(
        page * parseInt(numberOfItems) - parseInt(numberOfItems)
      );
    } else {
      firstItemIndexSet(0);
    }

    lastItemIndexSet(parseInt(numberOfItems) * page);
  };

  useEffect(() => {
    firstItemIndexSet(0);
    lastItemIndexSet(parseInt(numberOfItems));
  }, [numberOfItems]);

  return (
    <DisplayOptions.Provider
      value={{
        numberOfItems,
        numberOfItemsSet,
        displayGrid,
        displayGridSet,
        firstItemIndex,
        firstItemIndexSet,
        lastItemIndex,
        lastItemIndexSet,
        handleProductsDisplayed,
      }}
    >
      {children}
    </DisplayOptions.Provider>
  );
};

export const useDisplayOptionsContext = () => useContext(DisplayOptions);
