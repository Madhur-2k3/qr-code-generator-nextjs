import React from 'react'
import Image from 'next/image';

export default async function page({params}) {
  await new Promise(resolve=>setTimeout(resolve,2000));
    const id=params.id;
    const url= await `https://chart.googleapis.com/chart?chs=500x500&cht=qr&chld=H&chl=${id}`;
  return (
    <div className='flex flex-col items-center'>
        <Image src={url} width={500} height={100}/>
        <h1 className='text-2xl'>{id}</h1>       
    </div>
  )
}
