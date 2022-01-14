import { useEffect } from "react";

const MyButton = ({ type, state, caption }) => {
  useEffect(function () {}, [type, state, caption]);
  function renderBtn() {
    return state === "true" ? (
      <button className={type} onClick={() => alert("Hello")}>
        {caption}
      </button>
    ) : (
      <button className={type} disabled onClick={() => alert("Hello")}>
        {caption}
      </button>
    );
  }

  return <>{renderBtn()}</>;
};

export default MyButton;
