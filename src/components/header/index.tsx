"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulando login

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Logo</h1>
      
      {!isAuthenticated ? (
        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-white-600 rounded-md hover:bg-blue-500">
              Login
            </button>
          </Link>
          <Link href="/criar-conta">
            <button className="px-4 py-2 bg-black-600 text-color= white rounded-md hover:bg-green-500">
              Criar Conta
            </button>
          </Link>
        </div>
      ) : (
        <p>Bem-vindo!</p>
      )}
    </header>
  );
}