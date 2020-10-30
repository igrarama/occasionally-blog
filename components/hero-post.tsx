import DateFormatter from './date-formatter'
import Link from 'next/link'
import PostBody from './post-body'

type Props = {
  title: string
  date: string
  content: string
  slug: string
}

const HeroPost = ({
  title,
  date,
  slug,
  content
}: Props) => {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="mb-20 md:mb-28 ">
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
            <PostBody content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
