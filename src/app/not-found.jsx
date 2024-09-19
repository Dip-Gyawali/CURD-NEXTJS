import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=' flex h-[100vh] w-[100vw] items-center justify-center'>
      <div className='flex flex-col gap-5 border-2 border-black rounded-xl p-5 items-center'>
      <h2 className='font-bold text-red-600'>Not Found</h2>
      <p className='font-bold text-red-600'>Could not find requested resource</p>
      <Link href="/"><button className='rounded-xl p-2 bg-green-600 hover:bg-green-500'>Return Home</button></Link>
      </div>
    </div>
  )
}