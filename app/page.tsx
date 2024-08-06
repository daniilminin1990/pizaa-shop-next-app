import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Categories, Container, Filters, SortPopup, Title} from "@/components/shared";
import {TopBar} from "@/components/shared/top-bar";
import {ProductCard} from "@/components/shared/product-card";
import {ProductsGroupList} from "@/components/shared/products-group-list";

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
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 4,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 5,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 6,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 7,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    }
                  ]
                }
                categoryId={1} />
                <ProductsGroupList title={'Комбо'} items={
                  [
                    {
                      id: 1,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 2,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 3,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 4,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 5,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 6,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
                      items: [{price: 440}]
                    },
                    {
                      id: 7,
                      name: 'Пицца пися',
                      price: 20,
                      imageUrl: 'https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=45126-671&t=KMBHHcg8PNPZr25c-4',
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
