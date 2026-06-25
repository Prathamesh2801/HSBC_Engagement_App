import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiHeart, FiMessageCircle, FiImage, FiSend } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function PostCard({ post, index = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const text = newComment.trim();
    if (!text) return;

    setComments((prev) => [...prev, { id: `local-${Date.now()}`, author: "You", text }]);
    setNewComment("");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
      className="rounded-2xl border border-border bg-surface-translucent p-4 shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
          {post.author.initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-heading">{post.author.name}</p>
          <p className="text-xs text-subtle">
            {post.author.team} · {post.timestamp}
          </p>
        </div>
      </div>

      {post.caption && <p className="mt-3 text-sm text-text">{post.caption}</p>}

      <div className="mt-3 flex h-44 items-center justify-center rounded-xl bg-surface-muted text-subtle">
        <FiImage className="h-9 w-9" />
      </div>

      <div className="mt-3 flex items-center gap-5 border-t border-border pt-3">
        <button
          type="button"
          onClick={toggleLike}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
            liked ? "text-primary" : "text-muted hover:text-heading"
          }`}
        >
          {liked ? <FaHeart className="h-4 w-4" /> : <FiHeart className="h-4 w-4" />}
          {likeCount}
        </button>

        <button
          type="button"
          onClick={() => setCommentsOpen((prev) => !prev)}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
            commentsOpen ? "text-primary" : "text-muted hover:text-heading"
          }`}
        >
          <FiMessageCircle className="h-4 w-4" />
          {comments.length}
        </button>
      </div>

      <AnimatePresence>
        {commentsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2 border-t border-border pt-3">
              {comments.map((comment) => (
                <div key={comment.id} className="rounded-lg bg-surface-muted px-3 py-2">
                  <p className="text-xs font-semibold text-heading">{comment.author}</p>
                  <p className="text-sm text-text">{comment.text}</p>
                </div>
              ))}

              <form onSubmit={handleAddComment} className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 rounded-full border border-border-strong bg-surface px-3.5 py-2 text-sm text-text placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-soft"
                />
                <button
                  type="submit"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-on-primary transition-colors hover:bg-primary-hover"
                >
                  <FiSend className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
