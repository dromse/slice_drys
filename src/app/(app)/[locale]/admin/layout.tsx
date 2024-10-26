import { ReactNode } from 'react'
import { AppSidebar } from '@/components/admin/sidbar/sidbar'
import { SidebarProvider, SidebarTrigger } from '@/components/admin/ui/sidebar'

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: LanguageType }
}) {
  return (
    <div className="mx-auto max-w-[1248px]">
      <div className="bg-neutral-800 relative mx-auto flex rounded-lg">
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  )
}
