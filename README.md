# Social Feed

A small social feed app built to practice core React concepts — posts, likes, comments, and local persistence, no backend yet.

## Built with
<table>
    <tr>
        <td align="center">
        <img src="https://skillicons.dev/icons?i=react,vite" alt="React + Vite" />
        <br><sub>React + Vite</sub>
        </td>
    </tr>
</table>

## Features
- Add a new post
- Like a post
- Add comments to a post
- Delete a post
- Empty state when no posts remain
- Posts persist across refreshes via localStorage

## Planned Features
- Like count persistence (currently resets on refresh)
- Split Post component into smaller pieces (extract comments into their own component)
- Backend integration (Express + MongoDB) — replace hardcoded/local data with a real API
- Delete individual comments

# Run it locally
1. Clone the repo
```bash
git clone https://github.com/Aashutosh-kc/social-feed.git
```
2. Change directory
```bash
cd social-feed
```
3. Run it
- Run these commands one by one. (Make sure you have Node.js installed)
```bash
npm install
npm run dev
```
- Click on the given localhost link
```bash
http://localhost:5173/
```

## Roadmap

- [x] Static post component with props
- [x] Like button with useState
- [x] Render posts from array with map
- [x] Add new post with controlled input
- [x] Comments per post (nested state update)
- [x] Delete post with filter
- [x] Empty state when no posts
- [x] Persist posts with useEffect + localStorage
- [ ] Persist like counts
- [ ] Split Post.jsx into smaller components
- [ ] Backend integration (MERN)
