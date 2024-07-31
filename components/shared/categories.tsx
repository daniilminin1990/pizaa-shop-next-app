// @flow
import * as React from 'react';
import {cn} from "@/lib/utils";

type Props = {
  className?: string
};

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']
const activeIndex = 0
export const Categories = (props: Props) => {
  const {className} = props
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-2 rounded-2xl', className)}>
      {
        cats.map((cat, index) => {
          return (
            <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5', activeIndex === index ? 'bg-white shadow-md shadow-gray text-primary' : '' )} key={index}>
              <button>
                {cat}
              </button>
            </a>
          )
        })
      }
    </div>
  );
};