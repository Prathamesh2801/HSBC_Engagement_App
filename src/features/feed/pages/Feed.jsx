import { posts } from "../feedData";
import PostCard from "../components/PostCard";

export default function Feed() {
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div className="rounded-2xl border border-border bg-surface-translucent p-4 text-center shadow-xl backdrop-blur-md">
        <h1 className="text-xl font-semibold text-heading">Reel</h1>
        <p className="mt-1 text-sm text-muted">What's happening across the program.</p>
      </div>

      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
