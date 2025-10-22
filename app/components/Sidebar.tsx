"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, FileText, Package, Tag, BarChart2, Users, Heart, Shield, CreditCard, Building2, ChevronLeft,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: <Home size={18} />, label: "Dashboard", href: "/Dashboard" },
    { icon: <Package size={18} />, label: "Products", href: "/Products" },
    { icon: <Tag size={18} />, label: "Price Lists", href: "/price-lists" },
    { icon: <BarChart2 size={18} />, label: "Reporting", href: "/reporting" },
    { icon: <Users size={18} />, label: "Customers & Suppliers", href: "/customers" },
    { icon: <Heart size={18} />, label: "Promotions", href: "/promotions" },
    { icon: <Shield size={18} />, label: "Users & Security", href: "/users" },
    { icon: <CreditCard size={18} />, label: "Payment Types", href: "/payments" },
    { icon: <Building2 size={18} />, label: "My Company", href: "/company" },
  ];

  return (
    <div className={`bg-[#1e1e1e] text-gray-200 ${collapsed ? "w-16" : "w-56"} h-screen flex flex-col transition-all duration-300`}>
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <h1 className={`text-lg font-bold ${collapsed && "hidden"}`}>Management</h1>
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white">
          <ChevronLeft className={`transition-transform ${collapsed && "rotate-180"}`} />
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`flex items-center space-x-3 px-3 py-2 rounded cursor-pointer transition-colors 
              ${pathname === item.href ? "bg-gray-700 text-white" : "hover:bg-gray-700"}
            `}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
