import UserProfilePresenter from "./UserProfilePresenter";
import { useUserProfile } from "../hooks/useUserProfile";

function UserProfileContainer({ userId }) {
  const { user, posts, loading, error } = useUserProfile(userId);

  return (
    <UserProfilePresenter
      user={user}
      posts={posts}
      loading={loading}
      error={error}
    />
  );
}

export default UserProfileContainer;
