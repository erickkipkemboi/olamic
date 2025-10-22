"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

import {
  RefreshCcw,
  FolderPlus,
  Plus,
  Pencil,
  Trash2,
  Printer,
  FileDown,
  Tag,
  ArrowDownToLine,
  ArrowUpToLine,
  HelpCircle,
  SortAsc,
  TrendingUp,
} from "lucide-react";

import Sidebar from "@/app/components/Sidebar";

export default function ProductsPage() {
  const [products] = useState([]);

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-700">
          <TooltipProvider>
            <div className="flex items-center space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <RefreshCcw className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Refresh</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300">
                    <FolderPlus className="w-4 h-4 mr-1" /> New group
                  </Button>
                </TooltipTrigger>
                <TooltipContent>New group</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300">
                    <Plus className="w-4 h-4 mr-1" /> New product
                  </Button>
                </TooltipTrigger>
                <TooltipContent>New product</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled>
                    <Pencil className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Edit product</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Delete product</TooltipContent>
              </Tooltip>

              <Separator orientation="vertical" className="h-6 bg-gray-700 mx-2" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Printer className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Print</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <FileDown className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save as PDF</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Tag className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Price tags</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <SortAsc className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Sorting</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <TrendingUp className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Mov. avg. price</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ArrowDownToLine className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Import</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ArrowUpToLine className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Export</TooltipContent>
              </Tooltip>
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Help</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Main panel */}
        <div className="flex flex-1">
          {/* Left section (Groups) */}
          <div className="w-64 bg-[#252526] border-r border-gray-700 p-4">
            <h2 className="font-semibold text-sm mb-3 text-gray-300">Products</h2>
            <Card className="bg-[#2d2d2d] border-gray-700 p-3">
              <p className="text-gray-400 text-sm">No groups available</p>
              <Button variant="link" className="text-blue-400 px-0 mt-1">
                Add new product group
              </Button>
            </Card>
          </div>

          {/* Right section (Products list / empty state) */}
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            {products.length === 0 ? (
              <div className="text-center space-y-2">
                <div className="text-6xl opacity-40 mb-2">🚫</div>
                <p className="text-lg text-gray-300">
                  Selected group contains no products
                </p>
                <p className="text-sm">
                  <Button variant="link" className="text-blue-400 px-0">
                    Add new product
                  </Button>{" "}
                  or{" "}
                  <Button variant="link" className="text-blue-400 px-0">
                    new product group
                  </Button>
                </p>
              </div>
            ) : (
              <p>Products will be listed here...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
