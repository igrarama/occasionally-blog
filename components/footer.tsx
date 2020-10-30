import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://nextjs.org' className="hover:underline">Next.js</a>
          {` `}
          and modified by
          {` `}
          <Link  as={`/about`} href="/about">
            <a className="hover:underline">me</a>
          </Link>
          .
          {` `}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
