import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-20 md:mb-10">
        <div className="align-middle">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="md:grid md:grid-cols-2 mb-4 md:mb-0">
            <DateFormatter dateString={date} />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">
              {
                excerpt ? excerpt : null
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
