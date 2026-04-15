import { describe, it, expect } from 'vitest'
import { posts } from './fixtures'
import { filterByStatus } from '../src/index'

describe('filterByStatus', () => {
  it('return posts filtered by status === published', () => {
    expect(filterByStatus(posts, 'published')).toStrictEqual([posts[0], posts[2]])
  })
  it('return posts filtered by statuss === draft', () => {
    expect(filterByStatus(posts, 'draft')).toStrictEqual([posts[1], posts[3]])
  })
  it('return empty posts filtered by stats === review', () => {
    expect(filterByStatus(posts, 'review')).toStrictEqual([])
  })
})
