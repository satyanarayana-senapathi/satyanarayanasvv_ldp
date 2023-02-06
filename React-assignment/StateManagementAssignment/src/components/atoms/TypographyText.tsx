import { Typography } from "@mui/material";

export const TypographyText = ({ ...props }) => {
  return (
    <Typography
      id={props.typoId}
      variant={props.typoVariant}
      color={props.typoColor}
      fontWeight={props.fontWeight}
    >
      {props.typoContent}
    </Typography>
  );
};
