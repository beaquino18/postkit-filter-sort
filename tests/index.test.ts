import { describe, it, expect } from 'vitest'
import { filterByStatus, filterByTag, sortByDate, Post, sortByTitle } from '../src/index'

const posts: Post[] = [
  {
    id: '1',
    title: 'What Is Astrophage and Why Should You Care',
    body: 'A single-celled organism that feeds on solar energy and threatens all life on Earth...',
    author: 'Ryland Grace',
    tags: ['astrophage', 'space', 'solar'],
    category: 'research',
    status: 'published',
    createdAt: '2057-03-15',
    updatedAt: '2057-03-15'
  },
  {
    id: '2',
    title: 'My Unexpected Journey to Tau Ceti',
    body: 'I woke up alone on a spacecraft with no memory of how I got here...',
    author: 'Ryland Grace',
    tags: ['space', 'mission', 'survival'],
    category: 'personal',
    status: 'draft',
    createdAt: '2057-06-01',
    updatedAt: '2057-06-10'
  },
  {
    id: '3',
    title: 'Grace Is Idiot But Also Best Friend',
    body: 'Human not know basic chemistry. Human also save both world. Is confusing.',
    author: 'Rocky',
    tags: ['grace', 'friendship', 'confusing-humans'],
    category: 'personal',
    status: 'published',
    createdAt: '2057-09-01',
    updatedAt: '2057-09-01'
  },
  {
    id: '4',
    title: 'Grace Talk To Himself Again. Is Concern.',
    body: 'Rocky observe Grace mumble to self for third time today. Rocky not understand. Maybe human communication is broken?',
    author: 'Rocky',
    tags: ['grace', 'confusing-humans', 'concern'],
    category: 'personal',
    status: 'draft',
    createdAt: '2057-03-15',
    updatedAt: '2057-03-15'
  }
]

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

describe('sortByTitle', () => {
  it('sort posts by title from A-Z', () => {
    expect(sortByTitle(posts, 'asc')).toStrictEqual([posts[2], posts[3], posts[1], posts[0]])
  })
  it('sort posts by title from Z-A', () => {
    expect(sortByTitle(posts, 'desc')).toStrictEqual([posts[0], posts[1], posts[3], posts[2]])
  })
  it('returns empty array when posts is empty', () => {
    expect(sortByDate([])).toStrictEqual([])
  })
})
