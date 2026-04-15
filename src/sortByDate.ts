import { Post, PostStatus } from './types'

/**
 * Sort posts by their published date
 * @param posts - the list of posts to sort
 * @param direction - direction of sort with default newest to oldest
 * @returns a new array with sorted posts by its published date
 * 
 * @example
 * sortByDate(posts) // newest first (default)
 * sortByDate(posts, 'asc') // oldest first
*/
export function sortByDate(posts: Post[], direction: 'asc' | 'desc' = 'desc'): Post[] {
  return [...posts].sort((a, b) => {
    if (a.createdAt < b.createdAt) return direction === 'asc' ? -1 : 1
    if (a.createdAt > b.createdAt) return direction === 'asc' ? 1 : -1
    if (a.id < b.id) return -1
    if (a.id > b.id) return 1
    return 0
  })
}
