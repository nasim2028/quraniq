'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/app/logo';
import { Home, Search, BookHeart, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { Sheet, SheetContent } from '../ui/sheet';

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Verse Search', icon: Search },
  { href: '/dua', label: 'Dua Suggestion', icon: BookHeart },
];

export function MainSidebar() {
  const pathname = usePathname();
  const { isMobile, open: sidebarOpen, setOpen: setSidebarOpen, openMobile, setOpenMobile } = useSidebar();

  const toggleSidebar = () => {
    if (isMobile) {
      setOpenMobile(!openMobile);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const sidebarContent = (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
            <Logo />
            <SidebarTrigger className="hidden group-data-[collapsible=icon]:flex" />
        </div>
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

  return (
    <>
      {isMobile ? (
        <>
          <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b md:hidden">
            <div className="container flex h-14 items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="mr-2"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
              <Logo />
            </div>
          </header>
          <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <SheetContent side="left" className="p-0 w-72">
                <Sidebar className="flex" collapsible="none">
                    {sidebarContent}
                </Sidebar>
            </SheetContent>
          </Sheet>
        </>
      ) : (
        <Sidebar collapsible="icon" className="hidden md:flex">
          {sidebarContent}
        </Sidebar>
      )}
    </>
  );
}
