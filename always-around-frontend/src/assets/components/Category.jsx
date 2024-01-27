import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Category = (props) => {
  const doThis = (ev) => {
    props.setCategory(props.categoryName);
  };

  return (
    <div
      className="category"
      onClick={doThis}
      role="button"
      aria-pressed="false"
    >
      <h2>{props.categoryName}</h2>
      {props.categoryName == "Hälsningar" ? (
        <FontAwesomeIcon
          icon={faHeart}
          size="2xl"
          style={{ color: "#468ec3" }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faIcons}
          size="2xl"
          style={{ color: "#468ec3" }}
        />
      )}
    </div>
  );
};

export default Category;
