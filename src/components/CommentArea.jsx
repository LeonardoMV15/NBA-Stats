import { useState } from "react";
import CommentCard from "./CommentCard.jsx";
import "../styles/comment-area.css";
import axios from "axios";


function CommentArea({ team }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState(team.comments ?? []);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTextArea = (e) => setComment(e.target.value);
  const handleName = (e) => setName(e.target.value);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const newComment = {
      name,
      comment,
      teamId: team.id,
    };

    try {
      const response = await axios.post(
        "https://json-server-project2.onrender.com/comments",
        newComment,
      );
      setComments((current) => [...current, response.data]);
      setName("");
      setComment("");
    } catch (requestError) {
      console.error("No se pudo enviar el comentario", requestError);
      setError("The comment could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(commentId) {
    try {
      await axios.delete(
        `https://json-server-project2.onrender.com/comments/${commentId}`,
      );
      setComments((current) =>
        current.filter((comment) => comment.id !== commentId),
      );
    } catch (requestError) {
      console.error("No se pudo eliminar el comentario", requestError);
      setError("The comment could not be deleted. Please try again.");
    }
  }

  async function handleEdit(commentId, updates) {
    const currentComment = comments.find((item) => item.id === commentId);
    if (!currentComment) {
      throw new Error(`Comment ${commentId} was not found`);
    }

    const updatedComment = {
      ...currentComment,
      ...updates,
    };
    const response = await axios.put(
      `https://json-server-project2.onrender.com/comments/${commentId}`,
      updatedComment,
    );
    setComments((current) =>
      current.map((item) => (item.id === commentId ? response.data : item)),
    );
  }
  return (
    <section className="comment-area" aria-labelledby="comment-area-title">
      <form className="comment-area__form" onSubmit={handleSubmit}>
        <h2 className="comment-area__title" id="comment-area-title">
          Community comments
        </h2>
        <div className="comment-area__field">
          <label htmlFor="comment-name">Name</label>
          <input
            id="comment-name"
            name="name"
            placeholder="Your name"
            onChange={handleName}
            value={name}
            required
          />
        </div>
        <div className="comment-area__field">
          <label htmlFor="comment-text">Comment</label>
          <textarea
            id="comment-text"
            name="comment"
            placeholder="Write your comment"
            onChange={handleTextArea}
            value={comment}
            rows={4}
            required
          />
        </div>
        <button
          className="comment-area__submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send comment"}
        </button>
        {error && <p role="alert">{error}</p>}
      </form>
      <CommentCard
        comments={comments}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </section>
  );
}

export default CommentArea;
