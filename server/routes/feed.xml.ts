import RSS from 'rss'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: 'Miaouuu',
    site_url: 'https://miaouuu.co',
    feed_url: `https://miaouuu.co/feed.xml`,
  })

  const documents = await serverQueryContent(event).sort({ pubDate: -1 }).where({ _partial: false }).find()
  const posts = documents.filter((doc) => doc?._path?.includes('/blog'))

  for (const post of posts) {
    feed.item({
      title: post.title ?? '-',
      url: `https://miaouuu.co${post._path}`,
      date: post.pubDate,
      description: post.description,
    })
  }

  const feedString = feed.xml({ indent: true })
  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(feedString)
})
