import '../App.css';
import loaderImg from "../assets/loderr.gif";

const Loader =()=>{
    return (
    <img className="loading" width="300" height="240"  src={loaderImg} alt="Loading image" />
    )
};
export default Loader;   