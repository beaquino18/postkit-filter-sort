import { Post, PostStatus } from './types'

/**
 * Filter posts by their tag
 * @param posts - the list of posts to filter
 * @param tag - the tags to filter by
 * @returns a new array containing only posts with the given tag
 * 
 * @example
 * filterByTag(posts, 'Friends') // matches posts tagged 'friends' or 'Friends'
*/
export function filterByTag(posts: Post[], tag: string): Post[] {
  return posts.filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()))
}
