'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { FC } from 'react'
import Title from '@/components/ui/title'
import Image from 'next/image'

interface IProductSlider {
  title: string
  subtitle?: string
  list: IProduct[]
}

const ProductSlider: FC<IProductSlider> = ({ title, subtitle, list }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Title as="h3" variant="pencil">
        {title}
      </Title>
      <div className="flex justify-end">
        <p className="relative max-w-max">
          {subtitle}
          <Image
            src={'/line.svg'}
            className="mt-6"
            alt={`icon ander line`}
            fill={true}
          />
        </p>
      </div>

      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          gap: '1rem',
          pagination: false,
          arrows: true,
          breakpoints: {
            640: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
        className="mt-8"
      >
        {list.map((product, index) => (
          <SplideSlide key={index}>
            <div>{product.name}</div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default ProductSlider
