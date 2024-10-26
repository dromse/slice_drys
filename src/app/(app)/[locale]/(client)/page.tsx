import { Hero } from '@/components/hero/hero'
import Slider from '@/components/slider/slider'
import { topProductList } from '@/data/products'

export default function Home({
  params: { locale },
}: {
  params: { locale: LanguageType }
}) {
  const topProduct = topProductList[locale]

  return (
    <main className="mx-auto max-w-[1248px] px-2">
      <Hero />
      <Slider
        title="ТОПОВІ СУШЕНИКИ"
        subtitle="найсмачніші кусь-топчики"
        list={topProduct}
      />
    </main>
  )
}
