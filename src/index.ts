export type PostStatus = 'draft' | 'review' | 'published'

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
