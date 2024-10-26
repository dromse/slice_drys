import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { ElementType } from 'react' // Імпорт ElementType
import Image from 'next/image'

const titleStyles = cva('', {
  variants: {
    variant: {
      default: '',
      pencil: 'font-rubik-doodle text-[96px]',
      paragraph: 'text-[24px] relative max-w-max',
    },
    size: {
      xl: 'text-[96px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface TitleProps extends VariantProps<typeof titleStyles> {
  className?: string
  children: React.ReactNode
  as?: ElementType
  onClick?: () => void
  variant?: 'pencil' | 'paragraph'
}

export default function Title({
  variant,
  size,
  children,
  className,
  onClick,
  as: Tag = 'div',
}: TitleProps) {
  return (
    <Tag
      className={cn(titleStyles({ variant, size, className }))}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
