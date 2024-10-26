import { Hero } from '@/components/client/hero/hero'
import Slider from '@/components/client/slider/slider'

export default function Home({
  params: { locale },
}: {
  params: { locale: LanguageType }
}) {
  return (
    <main className="mx-auto max-w-[1248px] px-2">
      <Hero />
      <Slider
        title="ТОПОВІ СУШЕНИКИ"
        subtitle="найсмачніші кусь-топчики"
        list={[]}
      />
    </main>
  )
}
