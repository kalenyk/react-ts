import Spinner from "./style";
import LoaderImage from "../../assets/images/loader.png";
function Loader() {
  return (
    <Spinner>
      <img src={LoaderImage} alt="Loader icon" />
    </Spinner>
  );
}
export default Loader;
