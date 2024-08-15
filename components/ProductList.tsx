'use client';

import { InitialProducts } from '@/app/(tabs)/products/page';
import { useState } from 'react';
import ListProduct from './ListProduct';
import getMoreProducts from '@/app/(tabs)/products/action';

interface IProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: IProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const handleLoadMore = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(page + 1);
    if (newProducts.length !== 0) {
      setProducts((prev) => [...prev, ...newProducts]);
      setPage((prev) => prev + 1);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  };
  return (
    <div className='p-5 flex flex-col gap-5'>
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {isLastPage ? null : (
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className='text-sm font-semibold  bg-orange-500 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95'
        >
          {isLoading ? '로딩 중' : 'Load more'}
        </button>
      )}
    </div>
  );
}
