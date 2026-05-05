import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-6xl font-black mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <Link href="/" className="btn-neon">Back home</Link>
      </div>
    </div>
  );
}
