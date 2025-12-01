"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Trash2,
  DollarSign,
  CreditCard,
  Gift,
  FolderPlus,
  Tag,
  Save,
  RefreshCw,
  Lock,
  MoreHorizontal,
  Wrench,
  History,
  Layers,
  Download,
  LogOut,
  Megaphone,
  User,
  Settings,
  Maximize,
  Power,
  ArrowRight,
  Clock,
} from "lucide-react";

// GLOBAL POS BUTTON STYLE
const posBtn =
"pos-btn bg-gray-700 hover:bg-gray-600 h-[120px] text-white flex flex-col items-center justify-center gap-1 text-base transition cursor-pointer shadow-[0_0_10px_rgba(0,255,120,0.4)] hover:shadow-[0_0_20px_rgba(0,255,120,0.7)] rounded-xl";


export default function POSDesign() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="p-4 bg-gray-900 min-h-screen flex flex-col gap-4 text-white relative overflow-hidden">

      {/* Top Search Bar */}
      <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg">
        <Input
          placeholder="Search product by name"
          className="w-full bg-gray-700 border-none text-white placeholder-gray-400"
        />
        <Button
          variant="secondary"
          size="icon"
          className="bg-green-600 hover:bg-green-700 w-10 h-10"
        >
          <Search className="h-5 w-5 text-white" />
        </Button>
      </div>

      {/* Main POS Section */}
      <div className="flex flex-row gap-4">

        {/* Product Area */}
        <Card className="flex-[1.7] bg-gray-800 border-gray-700 relative flex flex-col justify-between">
          <CardContent className="p-4 h-[400px] text-gray-400 text-center flex items-center justify-center">
            No products added
          </CardContent>

          {/* Summary Section */}
          <div className="absolute bottom-4 right-4 bg-gray-900/70 border border-gray-700 rounded-lg p-3 w-[220px]">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>---</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>---</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t border-gray-700 pt-2 mt-2">
              <span>TOTAL</span>
              <span>---</span>
            </div>
          </div>
        </Card>

        {/* Control Buttons Section */}
        <Card className="w-[640px] bg-gray-800 border-gray-700 flex flex-col justify-between p-3">

          {/* TOP BUTTONS */}
          <div className="grid grid-cols-3 gap-4">

            <Button className={`${posBtn} bg-red-600 hover:bg-red-700`}>
              <Trash2 className="icon" />
              Del
            </Button>

            <Button className={posBtn}>
              <Search className="icon" />
              Search
            </Button>

            <Button className={posBtn}>
              <Tag className="icon" />
              Qty
            </Button>

           
            <Button className={posBtn}>
              <DollarSign className="icon" />
              Cash
            </Button>

            <Button className={posBtn}>
              <Gift className="icon" />
              Voucher
            </Button>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="grid grid-cols-3 gap-4 mt-16">

           <Button className={posBtn}>Drawer</Button>

            <Button className={posBtn}>
              <Save className="icon" />
              Save
            </Button>

            <Button className={posBtn}>
              <RefreshCw className="icon" />
              Refund
            </Button>

            <Button className={`${posBtn} bg-green-600 hover:bg-green-700`}>
              Payment
            </Button>

            <Button className={posBtn}>
              <Lock className="icon" />
              Lock
            </Button>

            <Button className={posBtn}>Transfer</Button>

            <Button className={`${posBtn} bg-red-600 hover:bg-red-700`}>
              Void
            </Button>

            <Button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={posBtn}
            >
              <MoreHorizontal className="icon" />
            </Button>
          </div>
        </Card>
      </div>

      {/* RIGHT SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-gray-800 text-gray-200 transition-transform duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">POS - Admin</h2>
          <ArrowRight
            className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <div className="p-4 space-y-4">
          <div>
            <Button variant="ghost" className="sidebar-btn">
              <Wrench className="h-5 w-5" /> Management
            </Button>

            <Button variant="ghost" className="sidebar-btn">
              <History className="h-5 w-5" /> View sales history
            </Button>

            <Button variant="ghost" className="sidebar-btn">
              <Layers className="h-5 w-5" /> View open sales
            </Button>

            <Button variant="ghost" className="sidebar-btn">
              <Download className="h-5 w-5" /> Cash In / Out
            </Button>

            <Button variant="ghost" className="sidebar-btn">
              <CreditCard className="h-5 w-5" /> Credit payments
            </Button>

            <Button variant="ghost" className="sidebar-btn">
              <Clock className="h-5 w-5" /> End of day
            </Button>
          </div>

          <hr className="border-gray-700" />

          <div>
            <p className="text-sm text-gray-400 mb-1">User</p>

            <Button variant="ghost" className="sidebar-btn">
              <User className="h-5 w-5" /> User info
            </Button>

            <Button variant="ghost" className="sidebar-btn">
              <LogOut className="h-5 w-5" /> Sign out
            </Button>

            <Button variant="ghost" className="sidebar-btn">
              <Megaphone className="h-5 w-5" /> Feedback
            </Button>
          </div>

          <div className="text-center text-gray-400 text-sm mt-4">
            21/10/2025
          </div>

          <div className="flex justify-around mt-6 text-gray-300">
            <Settings className="h-5 w-5 cursor-pointer hover:text-white" />
            <Maximize className="h-5 w-5 cursor-pointer hover:text-white" />
            <Power className="h-5 w-5 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
