/**
 * Publication statuses for a post.
 */
export type PostStatus = 'draft' | 'review' | 'published'

/**
 * Represents a single post in the PostKit system.
 */
export type Post = {
  id: string
  title: string
  body: string
  author: string
  tags: string[]
  category: string
  status: PostStatus
  createdAt: string
  updatedAt: string
}
