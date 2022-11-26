import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserService from "./API/UserService";
import User from "./components/User";
import Header from "./components/Header";
import ToggleTheme from "./components/UI/button/ToggleTheme";

function App() {
  const [theme, setTheme] = useState({
    disable: {title: "DARK"},
    enable: {title: "LIGHT"}
  });
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] =  useState({
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    bio: null,
    blog: "https://github.blog",
    company: "@github",
    created_at: "2011-01-25T18:44:36Z",
    email: null,
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    followers: 7629,
    followers_url: "https://api.github.com/users/octocat/followers",
    following: 9,
    following_url: "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    gravatar_id: "",
    hireable: null, 
    html_url: "https://github.com/octocat",
    id: 583231,
    location: "San Francisco",
    login: "octocat",
    name: "The Octocat",
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    public_gists: 8,
    public_repos: 8,
    received_events_url: "https://api.github.com/users/octocat/received_events",
    repos_url: "https://api.github.com/users/octocat/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    twitter_username: null,
    type: "User",
    updated_at: "2022-11-22T12:13:02Z",
    url: "https://api.github.com/users/octocat"
  });

  function changeTheme() {
    const newEnable = theme.disable;
    const newDisable = theme.enable;
    const newTheme = {disable: newDisable, enable: newEnable};
    document.body.classList.toggle("dark");
    setTheme(newTheme);
  }

  // useEffect(() => {
  //   fetchUser("octocat");
  // }, []);

  async function fetchUser(username) {
    const {data, status} = await UserService.get(username);
    if(status === 200) {
      setUser(data);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="w-full md:max-w-[573px] lg:max-w-[730px] mx-auto px-[24px] font-mono font-normal">
      <Header>
        <ToggleTheme {...theme.disable} onClick={changeTheme} />
      </Header>
      <SearchBar query={query} setQuery={setQuery} fetchUser={fetchUser} error={error} />
      <User user={user} />
    </div>
  );
}

export default App;
