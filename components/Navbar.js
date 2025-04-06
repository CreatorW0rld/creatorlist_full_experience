import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow flex justify-between">
      <div className="font-bold text-xl">CreatorList</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/discover">Discover</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/capital">Index Fund</Link>
        <Link href="/roi">My ROI</Link>
      </div>
    </nav>
  );
}