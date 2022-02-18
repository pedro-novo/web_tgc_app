export type ArrayNumberOfPagesType = (
  arraySize: number,
  numberOfItems: string
) => number[];

export const arrayNumberOfPages: ArrayNumberOfPagesType = (
  arraySize,
  numberOfItems
) => {
  const pages: number[] = [];
  const numberOfPages = Math.ceil(arraySize / parseInt(numberOfItems));
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  return pages;
};
