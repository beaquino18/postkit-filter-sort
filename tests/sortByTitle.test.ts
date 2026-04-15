import { describe, it, expect } from 'vitest'
import { posts } from './fixtures'
import { sortByTitle } from '../src/index'


describe('sortByTitle', () => {
  it('sort posts by title from A-Z', () => {
    expect(sortByTitle(posts, 'asc')).toStrictEqual([posts[2], posts[3], posts[1], posts[0]])
  })
  it('sort posts by title from Z-A', () => {
    expect(sortByTitle(posts, 'desc')).toStrictEqual([posts[0], posts[1], posts[3], posts[2]])
  })
  it('returns empty array when posts is empty', () => {
    expect(sortByTitle([])).toStrictEqual([])
  })
})
