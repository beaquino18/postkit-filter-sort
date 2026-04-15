import { Post } from '../src/types'

export const posts: Post[] = [
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
