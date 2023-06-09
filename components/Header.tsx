import {FC} from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*jfdwtvU6V6g99q3G7gq7dQ.png" alt="" className='w-44 cursor-pointer object-contain'/>
            </Link>
            <div className='hidden items-center space-x-5 md:inline-flex'>
                <h3> About</h3>
                <h3>Contact</h3>
                <h3 className='rounded-full bg-green-600 px-4 py-1 text-white'>
                    follow
                </h3>

            </div>
        </div>

        <div className="flex items-center space-x-5 text-gray-600">
            <h3>
                Sign in
            </h3>
            <h3 className='rounded-full border border-green-600 px-4 py-1'>
                Get Started
            </h3>
        </div>
    </header>
  )
}

export default Header