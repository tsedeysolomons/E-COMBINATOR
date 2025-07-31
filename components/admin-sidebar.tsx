"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  ClipboardList,
  Settings,
  Users,
  Home,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type SidebarItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: BarChart3,
  },
  {
    title: "Applications",
    href: "/admin/applications",
    icon: ClipboardList,
  },
  /*  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  }, */
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-brand-dark-navy text-white transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div
          className={cn(
            "flex items-center",
            collapsed ? "justify-center w-full" : ""
          )}
        >
          {!collapsed && (
            <img
              src="/logo.png"
              alt="E-Combinator Logo"
              className="h-8 w-auto"
            />
          )}
          {collapsed && <span className="text-xl font-bold">E-C</span>}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:bg-gray-800"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          <Link
            href="/"
            className={cn(
              "flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-800 transition-colors",
              collapsed ? "justify-center" : "space-x-3"
            )}
          >
            <Home className="h-5 w-5 text-gray-400" />
            {!collapsed && <span>Back to Website</span>}
          </Link>

          <div className={cn("pt-4 pb-2", collapsed ? "text-center" : "px-4")}>
            {!collapsed && (
              <p className="text-xs uppercase text-gray-400">Admin</p>
            )}
            {collapsed && (
              <div className="border-t border-gray-800 w-10 mx-auto"></div>
            )}
          </div>

          {sidebarItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-brand-blue-deep text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white",
                  collapsed ? "justify-center" : "space-x-3"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <div
          className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "space-x-3"
          )}
        >
          <div className="h-8 w-8 rounded-full bg-brand-orange flex items-center justify-center">
            <span className="text-sm font-medium">AD</span>
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@ecombinator.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
