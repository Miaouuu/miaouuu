import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends ParsedContent {
  title: string
  description: string
  imgUrl: string
  pubDate: string
  author: string
  draft?: boolean
  tags: string[]
}

export const useSuperContent = () => {
  async function findPosts() {
    const posts = await queryContent<Post>('blog').find()
    return posts
  }

  async function findPostsSortedWithLimit(limit = 3) {
    const posts = await queryContent<Post>('blog')
      .sort({
        pubDate: -1,
      })
      .limit(limit)
      .find()
    return posts
  }

  async function findPostsByTag(tag: string) {
    const posts = await queryContent<Post>('blog')
      .where({
        tags: { $icontains: tag },
      })
      .find()
    return posts
  }

  return {
    findPosts,
    findPostsSortedWithLimit,
    findPostsByTag,
  }
}
