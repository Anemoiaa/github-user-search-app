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
  const [user, setUser] = useState("");

  function changeTheme() {
    const newEnable = theme.disable;
    const newDisable = theme.enable;
    const newTheme = {disable: newDisable, enable: newEnable};
    document.body.classList.toggle("dark");
    setTheme(newTheme);
  }

  useEffect(() => {
    fetchUser("octocat");
  }, []);

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
    <div className="w-full md:max-w-[621px] lg:max-w-[778px] mx-auto px-[24px] font-mono font-normal pb-[44px]">
      <Header>
        <ToggleTheme {...theme.disable} onClick={changeTheme} />
      </Header>
      <SearchBar query={query} setQuery={setQuery} fetchUser={fetchUser} error={error} />
      <User user={user} />
    </div>
  );
}

export default App;
