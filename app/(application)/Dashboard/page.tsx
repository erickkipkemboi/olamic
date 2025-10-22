"use client";
import Sidebar from "@/app/components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex bg-[#2d2d2d] text-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">Monthly Sales - 2025</h1>

          <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-[#1e1e1e] p-4 rounded-xl">
            <p>Sales data grouped by month (Chart here)</p>
          </div>
          <div className="bg-[#1e1e1e] p-4 rounded-xl text-center">
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-5xl font-bold mt-2">0</p>
            <p className="text-gray-400 text-sm">Top performing month: ---</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#1e1e1e] p-4 rounded-xl">Top Products</div>
          <div className="bg-[#1e1e1e] p-4 rounded-xl">Hourly Sales</div>
          <div className="bg-[#1e1e1e] p-4 rounded-xl text-center">
            <h2 className="text-lg font-semibold mb-2">Total Sales (Amount)</h2>
            <p className="text-6xl font-bold">0</p>
          </div>
          <div className="bg-[#1e1e1e] p-4 rounded-xl col-span-2">Top Product Groups</div>
          <div className="bg-[#1e1e1e] p-4 rounded-xl">Top Customers</div>
        </div>
      </main>
    </div>
  );
}
