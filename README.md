# Package name

postkit-filter-sort

# Purpose

A utility library for filtering and sorting posts by status, tag, date, and title.

# Exports

### `filterByStatus`

- **Input:** `posts: Post[]`, `status: PostStatus`
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts that's filtered by Status

### `filterByTag`

- **Input:** `posts: Post[]`, `tag:string`
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts that's filtered by Tag

### `sortByDate`

- **Input:** `posts: Post[]`, `direction?: 'asc' | 'desc'`
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts sorted by date. Defaults to `'desc'` (newest first) if no direction is provided.

### `sortByTitle`

- **Input:** `posts: Post[]`, `direction?: 'asc' | 'desc'`
- **Output:** `Post[]`
- **Description:** Returns a new list of Posts sorted by Title. Defaults to `'asc'` (A → Z) if no direction is provided.

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
