// @flow
import * as React from 'react';
import {cn} from "@/lib/utils";
import {Title} from "./title";
import {FilterCheckbox} from "./filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "./range-slider";
import {ChekboxFiltersGroup} from "@/components/shared/checkbox-filters-group";

type Props = {
  className?: string
};
export const Filters = (props: Props) => {
  const {className} = props
  return (
    <div className={cn('', className)}>
      <Title text={'Фильтрация'} size={'sm'} className={'mb-5 font-bold'} />

      {/* Upper checkboxes */}
      <div className={'flex flex-col gap-4'}>
        <FilterCheckbox text={"Можно собирать"} value={'1'}/>
        <FilterCheckbox text={"Новинки"} value={'2'}/>
      </div>

      {/* Price filter */}
      <div className={'mt-5 border-y border-y-neutral-100 py-6 pb-7'}>
        <p className={'font-bold mb-3'}>Цена от и до:</p>
        <div>
          <Input type={'number'} placeholder={'0'} min={0} max={1000} defaultValue={0}/>
          <Input type={'number'} placeholder={'1000'} min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <ChekboxFiltersGroup title={'Ингредиенты'} className={'mt-5'} limit={6} defaultItems={[
        {
          text: 'Сыр',
          value: '1',
        },
        {
          text: 'Моцарелла',
          value: '2',
        },
        {
          text: 'Чеснок',
          value: '3',
        },
        {
          text: 'Соленые огурчики',
          value: '4',
        },
        {
          text: 'Красный лук',
          value: '5',
        },
        {
          text: 'Томаты',
          value: '6',
        },
      ]} items={[
        {
          text: 'Сыр',
          value: '1',
        },
        {
          text: 'Моцарелла',
          value: '2',
        },
        {
          text: 'Чеснок',
          value: '3',
        },
        {
          text: 'Соленые огурчики',
          value: '4',
        },
        {
          text: 'Красный лук',
          value: '5',
        },
        {
          text: 'Томаты',
          value: '6',
        },
        {
          text: 'Сыр',
          value: '1',
        },
        {
          text: 'Моцарелла',
          value: '2',
        },
        {
          text: 'Чеснок',
          value: '3',
        },
        {
          text: 'Соленые огурчики',
          value: '4',
        },
        {
          text: 'Красный лук',
          value: '5',
        },
        {
          text: 'Томаты',
          value: '6',
        },
        {
          text: 'Сыр',
          value: '1',
        },
        {
          text: 'Моцарелла',
          value: '2',
        },
        {
          text: 'Чеснок',
          value: '3',
        },
        {
          text: 'Соленые огурчики',
          value: '4',
        },
        {
          text: 'Красный лук',
          value: '5',
        },
        {
          text: 'Томаты',
          value: '6',
        },
      ]} />
    </div>
  );
};