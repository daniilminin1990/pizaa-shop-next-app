import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Categories, Container, Filters, SortPopup, Title} from "@/components/shared";
import {TopBar} from "@/components/shared/top-bar";
import {ProductCard} from "@/components/shared/product-card";
import {ProductsGroupList} from "@/components/shared/products-group-list";
import s from '@/assets/pizza_diablo.jpg'

export default function Home() {
  return (
      <>
       <Container className={'mt-10'}>
         <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'}/>
       </Container>
       <TopBar />
        <Container className={'mt-10 pb-14'}>
          <div className={'flex gap-[80px]'}>
            {/* Filtration */}
            <div className={'w-[250px]'}>
              <Filters/>
            </div>

            {/*  List of products */}
            <div className={'flex-1'}>
              <div className={'flex flex-col gap-16'}>
                <ProductsGroupList title={'Пиццы'} items={
                  [
                    {
                      id: 1,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    }
                  ]
                }
                categoryId={1} />
                <ProductsGroupList title={'ЗАВТРАК БЛЯТЬ'} items={
                  [
                    {
                      id: 1,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: '@/assets/pizza_diablo.jpg',
                      items: [{price: 440}]
                    }
                  ]
                } categoryId={2} />
              </div>
            </div>
          </div>
        </Container>
      </>
  );
}
