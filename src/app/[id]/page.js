import React from 'react'
import Image from 'next/image';

export default function page({params}) {
    const id=params.id;
  return (
    <div className='flex flex-col items-center'>
        <Image src={`https://chart.googleapis.com/chart?chs=500x500&cht=qr&chld=H&chl=${id}`} width={500} height={100}/>
        <h1 className='text-2xl'>{id}</h1>
    </div>
  )
}
