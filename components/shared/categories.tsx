// @flow
'use client'
import * as React from 'react';
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

type Props = {
  className?: string
};

const cats = [
  { name: 'Пиццы', id: 1 },
  { name: 'Комбо', id: 2 },
  { name: 'Закуски', id: 3 },
  { name: 'Коктейли', id: 4 },
  { name: 'Кофе', id: 5 },
  { name: 'Напитки', id: 6 },
  { name: 'Десерты', id: 7 },
]
export const Categories = (props: Props) => {
  const {className} = props
  const categoryActiveId = useCategoryStore(state => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-2 rounded-2xl', className)}>
      {
        cats.map(({name, id}, index) => {
          return (
            <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
              categoryActiveId === id ? 'bg-white shadow-md shadow-gray text-primary' : '' )}
             href={`/#${name}`}
             key={index}>
              <button>
                {name}
              </button>
            </a>
          )
        })
      }
    </div>
  );
};