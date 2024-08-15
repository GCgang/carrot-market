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
    <div>
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {isLastPage ? null : (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? '로딩 중' : 'Load more'}
        </button>
      )}
    </div>
  );
}
