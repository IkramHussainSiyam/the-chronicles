const routes = {
  home: "/",
  auth: {
    login: "?auth=login",
    signup: "?auth=signup",
  },
  explore_stories: "/explore-stories",
  feed: {
    index: "/feed",
    following: "/feed/following",
    saved: "/feed/saved",
    private: "/feed/private",
  },
  new_story: "/new-story",
  me: {
    notifications: "/me/notifications",
    stories: {
      index: "/me/stories",
      published: "/me/stories/published",
      private: "/me/stories/private",
    },
    settings: {
      index: "/me/settings",
      account: "/me/settings/account",
      general: "/me/settings/general",
    },
  },
  user: {
    profile: (userId: string) => `/user/${userId}`,
    about: (userId: string) => `/user/${userId}/about`,
    lists: (userId: string) => `/user/${userId}/lists`,
    history: (userId: string) => `/user/${userId}/history`,
  },
};

export default routes;
