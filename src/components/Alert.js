// Start coding here
import styled from "@emotion/styled";
import error from "../react/frown.png";
import success from "../react/check-circle.png";
import info from "../react/alert-circle.png";
import warning from "../react/alert-triangle.png";

const AlertBox = styled.div`
  display: flex;
  padding-left: 30px;
  margin: 20px;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  font-family: "Kanit";
  width: 650px;
  height: 76px;
  border-radius: 10px;
  background: ${(props) => props.bgColor};
`;

function Alert(props) {
  let AlertImage;
  if (props.severity === "error") {
    AlertImage = error;
  } else if (props.severity === "success") {
    AlertImage = success;
  } else if (props.severity === "info") {
    AlertImage = info;
  } else {
    AlertImage = warning;
  }

  const alertColor = {
    error: "hsla(360, 80%, 88%, 1)",
    warning: "hsla(22, 80%, 88%, 1)",
    info: "hsla(43, 80%, 88%, 1)",
    success: "hsla(119, 74%, 89%, 1)",
  };
  return (
    <AlertBox bgColor={alertColor[props.severity]}>
      <img style={{ marginRight: "15px" }} src={AlertImage} />
      <div>{props.children}</div>
    </AlertBox>
  );
}

export default Alert;
