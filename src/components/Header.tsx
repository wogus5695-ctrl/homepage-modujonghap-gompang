"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "시공 사례", href: "#cases" },
    { name: "자주 묻는 질문", href: "#faq" },
    { name: "문의하기", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-white/90 backdrop-blur-sm py-8"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-10 w-40 lg:h-14 lg:w-[225px] transition-transform group-hover:scale-105">
            <Image
              src="/images/logo_v2.png"
              alt="모두종합환경 로고"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-500 hover:text-primary-blue font-semibold transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="lg:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl p-6 space-y-6 animate-in slide-in-from-top">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-xl font-bold text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
