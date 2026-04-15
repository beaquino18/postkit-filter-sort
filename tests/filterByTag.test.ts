import { describe, it, expect } from 'vitest'
import { posts } from './fixtures'
import { filterByTag } from '../src/index'

describe('filterByTag', () => {
  it('return posts with tag "space"', () => {
    expect(filterByTag(posts, 'space')).toStrictEqual([posts[0], posts[1]])
  })
  it('return posts with tag "Friendship"', () => {
    expect(filterByTag(posts, 'Friendship')).toStrictEqual([posts[2]])
  })
  it('return empty posts with tag "Rocky', () => {
    expect(filterByTag(posts, 'Rocky')).toStrictEqual([])
  })
})
