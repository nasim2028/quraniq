'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/app/logo';
import { Home, Search, BookHeart, Menu, Sparkles, Gem, Clock, BookKey, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/features', label: 'Features', icon: Sparkles },
  { href: '/quran', label: 'Full Quran Reader', icon: BookOpen },
  { href: '/search', label: 'Verse Search', icon: Search },
  { href: '/dua', label: 'Dua Suggestion', icon: BookHeart },
  { href: '/tasbeeh', label: 'Tasbeeh Counter', icon: Gem },
  { href: '/prayer-times', label: 'Prayer Times', icon: Clock },
  { href: '/names-of-allah', label: '99 Names of Allah', icon: BookKey },
];

export function MainSidebar() {
  const pathname = usePathname();
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  const sidebarContent = (
    <>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );

  if (isMobile) {
    return (
      <>
        <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b md:hidden">
          <div className="container flex h-14 items-center px-4">
             <Sheet open={openMobile} onOpenChange={setOpenMobile}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72 flex flex-col">
                  <Sidebar className="flex h-full border-0" collapsible="none">
                      {sidebarContent}
                  </Sidebar>
              </SheetContent>
            </Sheet>
            <Logo />
          </div>
        </header>
      </>
    )
  }

  return (
    <Sidebar collapsible="icon" className="hidden md:flex">
      {sidebarContent}
    </Sidebar>
  );
}
