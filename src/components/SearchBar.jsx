import SearchBtn from "./UI/button/SearchBtn";
import InputWitchIcon from "./UI/input/InputWitchIcon";
import NoResultsAlert from "./NoResultsAlert";

function SearchBar({ query, setQuery, fetchUser, error }) {
    return (
        <div className="
            flex flex-wrap justify-between
            mt-[36px] py-[9.5px] pr-[7px] pl-[16px] md:pr-[10px] md:pl-[32px]
            rounded-[15px] bg-[#FEFEFE] dark:bg-darkBlue
            shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.198567)] dark:shadow-none  
        ">
            <InputWitchIcon
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search GitHub username..."
            />
            <div>
                {error && <NoResultsAlert />}
                <SearchBtn onClick={async () => fetchUser(query)} />
            </div>
        </div>
    );

}

export default SearchBar;