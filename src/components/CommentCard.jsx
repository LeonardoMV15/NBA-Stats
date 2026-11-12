import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../styles/comment-card.css";

function CommentCard({ comments, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function startEdit(comment) {
    setEditingId(comment.id);
    setName(comment.name);
    setText(comment.comment);
    setError("");
  }

  function cancelEdit() {
    setEditingId(null);
    setName("");
    setText("");
    setError("");
  }

  async function acceptEdit(event, comment) {
    event.preventDefault();
    setError("");
    setIsSaving(true);

    try {
      await onEdit(comment.id, {
        name,
        comment: text,
      });
      cancelEdit();
    } catch (requestError) {
      console.error("No se pudo actualizar el comentario", requestError);
      setError("The comment could not be updated. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        const isEditing = editingId === comment.id;

        return (
          <li className="comment-card" key={comment.id}>
            {!isEditing && (
              <div className="comment-card__actions">
                <button
                  className="comment-card__action"
                  type="button"
                  aria-label={`Edit comment by ${comment.name}`}
                  onClick={() => startEdit(comment)}
                >
                  <FaRegEdit aria-hidden="true" />
                </button>
                <button
                  className="comment-card__action"
                  type="button"
                  aria-label={`Delete comment by ${comment.name}`}
                  onClick={() => onDelete(comment.id)}
                >
                  <MdDelete aria-hidden="true" />
                </button>
              </div>
            )}

            {isEditing ? (
              <form
                className="comment-card__edit-form"
                onSubmit={(event) => acceptEdit(event, comment)}
              >
                <label className="comment-card__edit-label">
                  Name
                  <input
                    className="comment-card__edit-input"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </label>
                <label className="comment-card__edit-label">
                  Comment
                  <textarea
                    className="comment-card__edit-input comment-card__edit-textarea"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    rows={4}
                    required
                  />
                </label>
                <div className="comment-card__edit-actions">
                  <button
                    className="comment-card__button comment-card__button--accept"
                    type="submit"
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving…" : "Accept"}
                  </button>
                  <button
                    className="comment-card__button"
                    type="button"
                    onClick={cancelEdit}
                    disabled={isSaving}
                  >
                    Cancel
                  </button>
                </div>
                {error && <p className="comment-card__error" role="alert">{error}</p>}
              </form>
            ) : (
              <>
                <h3 className="comment-card__name">{comment.name}</h3>
                <p className="comment-card__text">{comment.comment}</p>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentCard;
