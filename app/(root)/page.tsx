import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { navLinks } from "@/constants"

const Home = () => {
  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          SAAS
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link 
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home