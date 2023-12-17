'use client'

import { classNames } from '@/utils/cn'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function SideBarNavLink({
  href,
  children,
}: {
  href: string | null
  children: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment()
  const isActive = href === segment

  return (
    <Link
      href={href ? `/dashboard/${href}` : '/dashboard'}
      className={classNames(
        isActive
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:text-white hover:bg-gray-800',
        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
      )}
    >
      {children}
    </Link>
  )
}
