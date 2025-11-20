"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login logic here
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg"
      >
       <div className="text-center mb-6">
          <div className="text-blue-500 font-semibold text-lg">
            Welcome to Olamic POS System
          </div>
        </div>
        <h1 className="text-center text-white text-2xl font-semibold mb-6">
          Login
        </h1>

        <div className="mb-4">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 text-white border-gray-600 placeholder-gray-400"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          →
        </Button>

        <div className="mt-4 text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-cyan-400 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
}
