# Notes

## Status
Core feed works: add post, like, comment, delete, empty state,
persistence via localStorage. Exams are on, paused here.

## Known issues
- likeCount resets on refresh (only posts persist, not likes) — need
  to lift likeCount into the posts array itself instead of local
  state inside Post.jsx
- Post.jsx is getting crowded (likes + comments + delete all in one
  file) — consider splitting comments into their own component

## Next up (after exams)
- Split Post.jsx: pull comments into a CommentList.jsx component
- Fix likeCount persistence (move it into posts state, not
  useState(likes) inside Post)
- After that: start backend — Express + MongoDB, replace hardcoded
  posts array with real API calls

## Random ideas (not committed to these)
- Maybe add timestamps to posts/comments
- Maybe add edit post