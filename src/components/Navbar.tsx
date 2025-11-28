"use client";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Process",
    href: "/process",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between gap-4">
          <div className="flex flex-1 items-center justify-between gap-6">
            <Link
              href="/"
              className="group flex items-center justify-center rounded-full    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              aria-label="Return to homepage"
            >
              <Image
                width={40}
                height={40}
                className="h-14 w-auto rounded-full"
                src="/spacins-logo.svg"
                alt="Spacins logo"
                priority
              />
            </Link>
            <nav className="hidden md:flex flex-1 items-center justify-end gap-1 text-sm text-slate-300">
              {navigation.map((item) => {
                const isExternal = item.href.startsWith("http");
                const commonClasses = classNames(
                  "rounded-full px-3.5 py-2 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  "hover:text-white hover:bg-white/10",
                  "focus-visible:outline-sky-400"
                );
                if (isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={commonClasses}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link key={item.name} href={item.href} className={commonClasses}>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <nav className="md:hidden flex items-center gap-2 overflow-x-auto pb-3 pt-1 text-sm text-slate-300">
          {navigation.map((item) => {
            const isExternal = item.href.startsWith("http");
            const baseClasses = classNames(
              "whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition",
              "hover:border-sky-400/60 hover:text-white"
            );
            if (isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={baseClasses}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link key={item.name} href={item.href} className={baseClasses}>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
