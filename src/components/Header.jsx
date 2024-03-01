import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-gray-800 text-white flex justify-center items-center h-12'>
        <Link href='/'>
            QR Code Generator
        </Link>
    </header>
  )
}
