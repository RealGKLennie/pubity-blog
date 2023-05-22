import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

interface HeroPostProps {
  title: Post['title']
  coverImage: Post['coverImage']
  date: Post['date']
  excerpt: Post['excerpt']
  author: Post['author']
  slug: Post['slug']
  tags: string[] // Changed this to an array of strings
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: HeroPostProps) {
  console.log(tags); // add this line

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title || 'Untitled'}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
          {tags && (
            <div>
              <h3>Tags</h3>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li> // Here we're treating each tag as a string
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
