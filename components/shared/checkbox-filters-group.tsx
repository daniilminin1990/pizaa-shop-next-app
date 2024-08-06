// @flow
'use client'
import * as React from 'react';
import {Checkbox, Input} from "@/components/ui";
import {FilterCheckbox, FilterCheckboxProps} from "./filter-checkbox";
import {cn} from "@/lib/utils";
import {log} from "node:util";

type item = FilterCheckboxProps

type Props = {
  title: string
  items: item[]
  defaultItems: item[]
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
  limit?: number
  className?: string

};
export const ChekboxFiltersGroup = (props: Props) => {
  const {
    title,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    defaultItems,
    items,
    defaultValue,
    onChange
  } = props
  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  const list = showAll
    ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : defaultItems.slice(0, limit)

  return (
    <div className={cn('', className)}>
      <p className={'font-bold mb-3'}>{title}</p>

        {showAll &&
            <div className={'mb-5'}>
                <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className={'bg-gray-50 border-none'}/>
            </div>
        }

        <div className={'flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'}>
          {list.map((item, index) => (
            <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className={'text-primary mt-3'}
          >
            {showAll ? 'Скрыть все' : 'Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};