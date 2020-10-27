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
          <Link href="/about">
            <span className="hover:underline" style={{ cursor: 'pointer' }}>
              me
            </span>
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
