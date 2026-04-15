import { describe, it, expect } from 'vitest'
import { posts } from './fixtures'
import { sortByDate } from '../src/index'

describe('sortByDate', () => {
  it('sort post from oldest to newest', () => {
    expect(sortByDate(posts, 'asc')).toStrictEqual([posts[0], posts[3], posts[1], posts[2]])
  })
  it('sort post from newest to oldest', () => {
    expect(sortByDate(posts, 'desc')).toStrictEqual([posts[2], posts[1], posts[0], posts[3]])
  })
  it('returns empty array when posts is empty', () => {
    expect(sortByDate([])).toStrictEqual([])
  })
})
