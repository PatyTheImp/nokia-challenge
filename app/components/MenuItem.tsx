"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tailwindMenuItemClasses = "text-center p-3 border-b";

export default function MenuItem({
  className = "", //for additional classes
  text,
  href,
}: {
  className?: string;
  text: string;
  href: string;
}) {
  const isActive = href === usePathname();
  return (
    <li className={`${tailwindMenuItemClasses} ${className}`}>
      {isActive ? (
        <p className="font-extrabold">{text}</p>
      ) : (
        <Link
          className="cursor-pointer hover:underline decoration-indigo-500"
          href={href}
        >
          {text}
        </Link>
      )}
    </li>
  );
}
