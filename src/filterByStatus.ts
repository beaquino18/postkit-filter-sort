import { Post, PostStatus } from './types'

/**
 * Filter posts by their publication status
 * @param posts - the list of posts to filter
 * @param status - the status to filter by
 * @returns a new array containing only posts with the given status
 * 
 * @example
 * filterByStatus(posts, 'draft') // return only draft posts
*/
export function filterByStatus(posts: Post[], status: PostStatus): Post[] {
  return posts.filter(post => post.status === status)
}
