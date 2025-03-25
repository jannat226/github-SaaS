// 'use client';  // Make sure you're using this if it's a client-side component
import { Bot, CreditCard, LayoutDashboard, Presentation } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "~/components/ui/sidebar";
import Link from "next/link";  // Make sure to import Link
import { usePathname } from "next/navigation";  // Use this for pathname
import classNames from 'classnames';
import clsx from 'clsx';
import cn from 'classnames';
import { Button } from "~/components/ui/button";
import Image from "next/image";

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


const projects = [
  {
    name: 'Project 1',
    url: '/project/1',
  },{
    name: 'Project 2',
    url: '/project/2',  
  }
]
export function AppSidebar() {
  const pathname = usePathname();  // Get the current path
 const {open }= useSidebar()
  
  return (
    <div>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>
          <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        
          {open && (
            <h1 className="text-xl font-bold text-primary/80">CodeSync</h1>
          )}
          </div>
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
                    },'list-none')}
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

          <SidebarGroup>
            <SidebarGroupLabel>
              Your Project
            </SidebarGroupLabel> 
            <SidebarMenu>
              {projects.map(project => {
                return(
                  <SidebarMenuItem
                    key={project.name}
                    className={clsx({
                      '!bg-primary': pathname === project.url, // Apply background when URL matches
                      'text-white': pathname === project.url,  // Apply white text color when URL matches
                    },'list-none')}
                  >
                    <SidebarMenuButton asChild>
                      <div>
                      <div className={cn('rounded-sm border size-6 flex items-center justify-center text-sm bg-y',     {
                            'bg-primary text-white' : true
                            
                          })} >
                      {project.name[0]}
                       

                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
              {open && (<SidebarMenuItem>
              <div className="h-2"></div>
              <Button variant={'outline'} className="w-fit">
                <Link href='/create'>
                Create Project
                </Link>
              </Button>
              </SidebarMenuItem>)}
              </SidebarMenu>         
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
