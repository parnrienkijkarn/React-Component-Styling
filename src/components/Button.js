// Start coding here

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  const buttonColor = {
    primary: "hsla(221, 94%, 47%, 1)",
    secondary: "hsla(198, 94%, 47%, 1)",
    error: "hsla(2, 68%, 60%, 1)",
    success: "hsla(166, 65%, 43%, 1)",
  };

  const sizeMapping = {
    large: "width:172px; height: 50px;",
    medium: "width:137px; height: 40px",
    small: "width:80px; height: 32px;",
  };

  return (
    <button
      css={css`
        background-color: hsla(221, 94%, 47%, 1);
        background-color: ${buttonColor[props.color]};
        width: 136.95px;
        height: 40px;
        ${sizeMapping[props.size]};
        color: white;
        font-weight: 400;
        border-radius: 4px;
        border: none;
        margin: 0px 16px;
      `}
    >
      {props.children}{" "}
    </button>
  );
}
