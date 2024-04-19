import Link from 'next/link'
import './layout.sass'
import Image from 'next/image'

export default async function AboutLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <div className='aboutlayout'>
      <div className='about-top'>
        <Link href={'/'} className='image'>
          <Image src={'/static/images/europe.jpg'} width={45} height={45} priority alt='logo'  />
        </Link>
        <ul>
          <li>
            <Link href={'/about/europe'}>EUROPE</Link>
          </li>
          <li>
            <Link href={'/about/nato'}>NATO</Link>
          </li>
          <li>
            <Link href={'/about/un'}>UN</Link>
          </li>
        </ul>
      </div>
      <div className='about-content'>
        {children}
      </div>
    </div>
  )
}
