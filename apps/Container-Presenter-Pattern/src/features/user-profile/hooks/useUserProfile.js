import { useEffect, useState } from "react";
import { getUser, getPosts } from "@repo/api";

export function useUserProfile(userId) {
  const [state, setState] = useState({
    user: null,
    posts: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setState((s) => ({ ...s, loading: true, error: null }));

        const [user, posts] = await Promise.all([
          getUser(userId),
          getPosts(userId),
        ]);

        if (cancelled) return;

        setState({
          user,
          posts,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.log("err", err);
        if (cancelled) return;

        setState({
          user: null,
          posts: [],
          loading: false,
          error: "Failed to fetch profile",
        });
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return state;
}
