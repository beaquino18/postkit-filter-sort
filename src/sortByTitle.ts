import { Post, PostStatus } from './types'

/**
 * Sort posts by their title
 * @param posts - the list of posts to sort
 * @param direction - direction of sort with default A-Z
 * @returns a new array with sorted posts by its title
 * 
 * @example
 * sortByTitle(posts) // A first
 * sortByTitle(posts, 'desc') // Z first
*/
export function sortByTitle(posts: Post[], direction: 'asc' | 'desc' = 'asc'): Post[] {
    return [...posts].sort((a, b) => {
    if (a.title < b.title) return direction === 'asc' ? -1 : 1
    if (a.title > b.title) return direction === 'asc' ? 1 : -1
    if (a.id < b.id) return -1
    if (a.id > b.id) return 1
    return 0
  })
}
