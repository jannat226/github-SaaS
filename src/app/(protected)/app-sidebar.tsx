// 'use client';  // Make sure you're using this if it's a client-side component
import { Bot, CreditCard, LayoutDashboard, Presentation } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from "~/components/ui/sidebar";
import Link from "next/link";  // Make sure to import Link
import { usePathname } from "next/navigation";  // Use this for pathname
import classNames from 'classnames';
import clsx from 'clsx';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Q&A',
    url: '/qa',
    icon: Bot,
  },
  {
    title: 'Meetings',
    url: '/meetings',
    icon: Presentation,
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: CreditCard,
  },
];

export function AppSidebar() {
  const pathname = usePathname();  // Get the current path
  
  return (
    <div>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>
          logo
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              Application
            </SidebarGroupLabel>
            <SidebarContent>
              {items.map(item => {
                return (
                    <SidebarMenuItem
                    key={item.title}
                    className={clsx({
                      '!bg-primary': pathname === item.url, // Apply background when URL matches
                      'text-white': pathname === item.url,  // Apply white text color when URL matches
                    })}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <div className="flex items-center gap-2">
                          <item.icon size={20} />
                          {item.title}
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                );
              })}
            </SidebarContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
