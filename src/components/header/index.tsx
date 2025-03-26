"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulando login

  return (
    <header className="bg-white text-white p-4 flex justify-between items-center">
      <Image src="/logoPI.png" alt="Logo" width={200} height={100} className="w-32 h-auto"/>
      {!isAuthenticated ? (
        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-black hover:text-white">
              Login
            </button>
          </Link>
          <Link href="/criar-conta">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-500">
              Criar Conta
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-black">Bem-vindo!</p>
      )}
    </header>
  );
}