import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react"

/* Forma de llamar una función asíncrona para sitio web
const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  })
}
  */


const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const Navbar = async () => {

  //await temporalAsync();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className='flex items-center'>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>
      
      {
        navItems.map(navItem => (
          <Link key={ navItem.path } className="mr-2" href={ navItem.path }>{navItem.text}</Link>
        ))
      }

    </nav>
  )
}
