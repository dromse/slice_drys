export const productsUk: IProduct[] = [
  {
    id: 1,
    name: 'use client',
    img: '',
    variables: [
      {
        id: 1,
        weight: 1,
        price: 100,
        newPrice: 80,
        currency: 'USD',
        count: 1,
        statusLabel: 'active',
        sold: 0,
      },
    ],
    visited: 0,
    category: 'use client',
    menu: 'use client',
  },
]

export const topProductList = {
  en: productsUk,
  uk: productsUk,
}
