import Link from 'next/link'
import Author from '../types/author'
import Avatar from './avatar'

type Props = {
  title: string,
  author: Author
}

const Header = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Occasionally</a>
        </Link>
        .
      </h2>
    </div>
    
  )
}

export default Header
