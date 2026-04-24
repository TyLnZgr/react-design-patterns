function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="user-card__avatar">{user.name[0]}</div>
      <div className="user-card__body">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </article>
  );
}

export default UserCard;
