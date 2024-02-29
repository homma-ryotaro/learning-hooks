import Link from 'next/link';
import React from 'react';

export default function Home() {
  const links = [
    { href: '/usestate', label: 'useState' },
    { href: '/selecttag', label: 'selectTag' },
    { href: '/customhooks', label: 'customHooks' },
    { href: '/idscroll', label: 'id-scroll' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold pb-5">TopPage</h1>
      <ul className="flex flex-col p-10 gap-2 items-center">
        {links.map(({ href, label }, index) => (
          <li
            key={index}
            className="w-48 border px-4 py-2 flex items-center justify-center"
          >
            <Link href={href} className="border-b-2 text-lg font-bold">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
