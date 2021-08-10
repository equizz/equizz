import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/login">
      <a className="text-blue-500" href="/login">Login</a>
    </Link>
  );
}
