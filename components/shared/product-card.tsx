// @flow
import * as React from 'react';
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

type Props = {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
  className?: string
};
export const ProductCard = (props: Props) => {
  const {className, name, price, imageUrl, id} = props
  return (
    <div className={cn('', className)}>
      <Link href={`/products/${id}`}>
        <div className={'flex justify-center p-6 bg-secondary rounded-lg h-[260px]'}>
          <img className={'w-[215px] h-[215px]'} src={imageUrl} alt={name}/>
        </div>
        <Title text={name} size={'sm'} className={'mb-1 mt-3 font-bold'} />
        <p className={'text-sm text-gray-400'}>
          Цыпленок, Моцарелла, ЛОПАТА, Жопа бобра, свиные яйца, птичий помет
        </p>
        <div className={'flex justify-between items-center mt-4'}>
          <span className={'text-[20px]'}>
            от <b>{price} ₽</b>
          </span>
          <Button variant={'secondary'} className={'text-base font-bold'}>
            <Plus size={20} className={'mr-1'} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};