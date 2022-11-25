import SearchBtn from "./UI/button/SearchBtn";
import InputWitchIcon from "./UI/input/InputWitchIcon";

function SearchBar({query, setQuery, fetchUser}) {
    return (
        <div>
            <InputWitchIcon
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search GitHub username..."
            />
            <SearchBtn onClick={async() => fetchUser(query)} />
        </div>
    );

}

export default SearchBar;