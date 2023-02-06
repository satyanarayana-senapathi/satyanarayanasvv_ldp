import { Button } from "@mui/material";

export const Buttons = ({ ...props }) => {
  return (
    <Button
      id={props.btnId}
      variant={props.btnVariant}
      onClick={props.onClick}
      size={props.btnize}
      sx={{ color: `${props.btnColor}` }}
    >
      {props.btnContent}
    </Button>
  );
};
