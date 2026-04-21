import Error from "../../../shared/ui/Error";
import Loading from "../../../shared/ui/Loading";
import "./user-profile-presenter.css";

function UserProfilePresenter({ user, posts, loading, error }) {
  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <div className="profile">
      <div className="profile__card">
        <h1 className="profile__name">{user.name}</h1>
        <p className="profile__email">{user.email}</p>
        <p className="profile__address">
          {user.address?.street} - {user.address?.city}
        </p>
      </div>

      <div className="posts">
        <h2 className="posts__title">Recent Posts ({posts.length})</h2>

        {!posts.length ? (
          <p className="posts__empty">No posts yet.</p>
        ) : (
          <div className="posts__list">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <h3 className="post__title">{post.title}</h3>
                <p className="post__body">{post.body.substring(0, 150)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfilePresenter;
