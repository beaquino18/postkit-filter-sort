# Package name

postkit-filter-sort

# Purpose

A utility library for filtering and sorting posts by status, tag, date, and title.

# Exports

### `filterByStatus`

- **Input:** `posts: Post[]`, `status: PostStatus` <- Maybe we should mentions the possible values here:  'draft' | 'published' otherwise we have to look it up. 
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts that's filtered by Status

### `filterByTag`

- **Input:** `posts: Post[]`, `tag:string`
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts that's filtered by Tag <-- This a little vague are you matching the tag or do we get posts that contain the tag? 

### `sortByDate`

- **Input:** `posts: Post[]`, `direction?: 'asc' | 'desc'`
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts sorted by date. Defaults to `'desc'` (newest first) if no direction is provided. <-- When you say date here, what are we talking about, is that a date object, ISO date, UTC, date string? You will want to talk with anyone else who is working with dates, If you can get the team to recogonize the format that would be good. 

### `sortByTitle`

- **Input:** `posts: Post[]`, `direction?: 'asc' | 'desc'`
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts sorted by Title. Defaults to `'asc'` (A → Z) if no direction is provided. <-- Is this case sensistive sort or not? 

# Example Usage

```
import { filterByStatus, filterByTag, sortByDate, sortByTitle } from 'postkit-filter-sort'

// a simple list of posts
const posts = [post1, post2, post3]

// filter by status
const drafts = filterByStatus(posts, 'draft')

// filter by tag
const tagged = filterByTag(posts, 'typescript')

// sort by title (A → Z by default)
const byTitle = sortByTitle(posts)

// sort by title Z → A
const byTitleDesc = sortByTitle(posts, 'desc')

// sort by date (newest first by default)
const byDate = sortByDate(posts)

// sort by date oldest first
const byDateAsc = sortByDate(posts, 'asc')
```

# Edge Cases

- **Empty array:** If `posts` is empty, all functions return `[]`

- **Case sensitivity (`filterByTag`):** Tags are normalized to lowercase
  before matching. `'Popular'` will match posts tagged `'popular'`

- **Tie breaking (`sortByDate`, `sortByTitle`):** If two posts share
  the same date or title, they are sorted by `id` as a tiebreaker

- **Combining filter and sort:** Functions can be chained — the caller
  controls the order:

```ts
const result = sortByDate(filterByStatus(posts, "draft"));
```

# Design Notes

! Most important is that these functions do not mutate, they must return new arrays, the functions should be "pure" ! 

- Decided to return a new array instead of mutating the current array for filter and sort for performance issue. If the user wants to access the original array, then there's multiple API calls that needs to happen instead of just referring to the original array
- Chose `asc | desc` as direction instead of boolean. It would be difficult for users to ascertain whether `true` is for ascending or descending order. Avoiding "magic booleans"
- Direction is optional with a default because requiring it every time
  would be inconvenient. Most users of a publishing app want to see the
  newest posts first, so `sortByDate` defaults to `'desc'` and
  `sortByTitle` defaults to `'asc'` (A → Z) for natural alphabetical reading.
