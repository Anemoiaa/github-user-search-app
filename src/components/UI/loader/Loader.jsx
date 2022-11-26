import cl from "./Loader.module.css";

function Loader(props) {
    return (
        <div className={`${cl.loader} mt-[30px] text-center text-[16px] text-[#222731] dark:text-[#fff]`}>
            Loading...
        </div>
    );
}

export default Loader;