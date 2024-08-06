// @flow

'use client'
import * as React from 'react';
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-card";
import { useIntersection } from 'react-use';
import {useEffect} from "react";
import {useCategoryStore} from "@/store/category";

type Props = {
  title: string,
  // products: CategoryProducts[],
  items: any[],
  categoryId: number,
  listClassName?: string,
  className?: string
};
export const ProductsGroupList = (props: Props) => {
  const {className, listClassName, title, items, categoryId} = props
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  });

  useEffect(() => {
    if(intersection?.isIntersecting){
      console.log(title, categoryId)
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title]);
  return (
    <div className={cn('', className)} id={title} ref={intersectionRef}>
      <Title text={title} size={'lg'} className={'font-extrabold mb-5'} />
      <div className={cn('grid grid-cols-3 gap-[50px]', className)}>
        {items.map((product, i) => (
          <ProductCard key={product.id} id={product.id} name={product.name} price={product.items[0].price} imageUrl={product.imageUrl} />
        ))}
      </div>
    </div>
  );
};