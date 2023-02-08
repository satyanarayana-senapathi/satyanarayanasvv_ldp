import { Typography } from "@mui/material";

interface TypoProps {
  typoId?: string;
  typoVariant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  typoColor?: string;
  fontWeight?: string;
  typoContent?: string;
}
export const TypographyText = ({ ...props }: TypoProps) => {
  const { typoColor, typoContent, typoId, typoVariant, fontWeight } = props;
  return (
    <Typography
      id={typoId}
      variant={typoVariant}
      color={typoColor}
      fontWeight={fontWeight}
    >
      {typoContent}
    </Typography>
  );
};
