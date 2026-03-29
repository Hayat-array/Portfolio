'use client';

import dynamic from 'next/dynamic';

const HeaderNoSSR = dynamic(
  () => import('@/components/header').then((mod) => mod.Header),
  { ssr: false }
);

export function HeaderClientOnly() {
  return <HeaderNoSSR />;
}
