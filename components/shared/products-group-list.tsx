// @flow
import * as React from 'react';
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-card";

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
  return (
    <div className={cn('', className)}>
      <Title text={title} size={'lg'} className={'font-extrabold mb-5'} />
      <div className={cn('grid grid-cols-3 gap-[50px]', className)}>
        {items.map((product, i) => (
          <ProductCard key={product.id} id={product.id} name={product.name} price={product.items[0].price} imageUrl={product.imageUrl} />
        ))}
      </div>
    </div>
  );
};