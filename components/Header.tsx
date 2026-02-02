"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationMenu, type SubmenuItem } from "@/data/siteData";

export default function Header() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav className="w-full py-3 px-4 lg:px-8">
        <div className="max-w-[1600px] mx-auto flex items-center gap-4">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/nursing_logo.png"
              alt="JKKN College Logo"
              width={130}
              height={64}
              className="h-12 w-auto lg:h-16 lg:w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden xl:flex items-center gap-1 flex-1 justify-center">
            {navigationMenu.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => {
                  setActiveSubmenu(null);
                  setActiveNestedSubmenu(null);
                }}
              >
                {item.submenu ? (
                  <button
                    className="text-black hover:text-primary font-semibold text-[13px] px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1"
                  >
                    {item.label}
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
                      <path d="M6 9L1 4h10z" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-black hover:text-primary font-semibold text-[13px] px-3 py-2 transition-colors whitespace-nowrap flex items-center gap-1"
                  >
                    {item.label}
                  </Link>
                )}

                {/* First Level Submenu */}
                {item.submenu && activeSubmenu === item.label && (
                  <div className={`absolute top-full mt-0 bg-white shadow-lg py-2 ${item.label === 'OTHERS' ? 'min-w-[500px] grid grid-cols-2 gap-x-2 divide-x divide-gray-200' : 'min-w-[240px]'} border border-gray-200 z-50 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'right-0' : 'left-0'}`}>
                    {item.submenu.map((subitem: SubmenuItem) => (
                      <div
                        key={subitem.label}
                        className="relative group/nested"
                        onMouseEnter={() => subitem.submenu && setActiveNestedSubmenu(subitem.label)}
                        onMouseLeave={() => !subitem.submenu && setActiveNestedSubmenu(null)}
                      >
                        {subitem.submenu ? (
                          <Link
                            href={subitem.href}
                            className="w-full block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between"
                          >
                            <span>{subitem.label}</span>
                            <svg className={`w-3 h-3 fill-current ml-2 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'rotate-180' : ''}`} viewBox="0 0 12 12">
                              <path d="M4 1l5 5-5 5z" />
                            </svg>
                          </Link>
                        ) : (
                          <Link
                            href={subitem.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors flex items-center justify-between"
                          >
                            <span>{subitem.label}</span>
                          </Link>
                        )}

                        {/* Nested Submenu */}
                        {subitem.submenu && activeNestedSubmenu === subitem.label && (
                          <div className={`absolute top-0 ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'right-full mr-0' : 'left-full ml-0'} bg-white shadow-lg py-2 min-w-[260px] border border-gray-200 z-50 overflow-visible`}>
                            {subitem.submenu.map((nestedItem) => (
                              <Link
                                key={nestedItem.label}
                                href={nestedItem.href}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors"
                              >
                                {nestedItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Apply Now Button - Right Side (Desktop Only) */}
          <div className="hidden xl:flex items-center flex-shrink-0">
            <a
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Apply Now Button */}
          <a
            href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
            className="xl:hidden ml-auto bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded transition-colors whitespace-nowrap text-sm"
          >
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
}
