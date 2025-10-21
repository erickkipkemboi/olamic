"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {Search,Trash2,DollarSign,CreditCard,Gift,FolderPlus,Tag,Save,RefreshCw, Lock, MoreHorizontal,
  Wrench,History,Layers,Download,LogOut,Megaphone,User,Calendar,Settings,Maximize,Power,  ArrowRight,
  Clock,
} from "lucide-react";

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

          {/* Summary Section (bottom-right) */}
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
        <Card className="w-[340px] bg-gray-800 border-gray-700 flex flex-col justify-between p-3">
          {/* Top Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-600 hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Del
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <Search className="h-4 w-4 mr-1" />
              Search
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <Tag className="h-4 w-4 mr-1" />
              Qty
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <FolderPlus className="h-4 w-4 mr-1" />
              New
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <DollarSign className="h-4 w-4 mr-1" />
              Cash
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <CreditCard className="h-4 w-4 mr-1" />
              Credit
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <CreditCard className="h-4 w-4 mr-1" />
              Debit
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <Gift className="h-4 w-4 mr-1" />
              Voucher
            </Button>
            <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
              <Gift className="h-4 w-4 mr-1" />
              Gift
            </Button>
          </div>

          {/* Bottom Buttons */}
          <div className="grid grid-cols-3 gap-2 mt-6">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              Discount
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              Comment
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              Drawer
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <Save className="h-4 w-4 mr-1" />
              Save
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Refund
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              Payment
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <Lock className="h-4 w-4 mr-1" />
              Lock
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              Transfer
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-600 hover:bg-red-700"
            >
              Void
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-700"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-gray-800 text-gray-200 transform transition-transform duration-300 ease-in-out shadow-lg ${
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
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <Wrench className="h-5 w-5" /> Management
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <History className="h-5 w-5" /> View sales history
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <Layers className="h-5 w-5" /> View open sales
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <Download className="h-5 w-5" /> Cash In / Out
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <CreditCard className="h-5 w-5" /> Credit payments
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <Clock className="h-5 w-5" /> End of day
            </Button>
          </div>

          <hr className="border-gray-700" />

          <div>
            <p className="text-sm text-gray-400 mb-1">User</p>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <User className="h-5 w-5" /> User info
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
              <LogOut className="h-5 w-5" /> Sign out
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-gray-200 hover:bg-gray-700">
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
