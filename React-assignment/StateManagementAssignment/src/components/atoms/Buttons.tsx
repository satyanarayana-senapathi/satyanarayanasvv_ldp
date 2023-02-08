import { Button } from "@mui/material";

interface BtnProps {
  btnId?: string;
  btnVariant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  btnSize?: "small" | "medium" | "large";
  btnColor?: string;
  btnContent?: string;
}
export const Buttons = ({ ...props }: BtnProps) => {
  const { btnId, btnVariant, onClick, btnSize, btnColor, btnContent } = props;
  return (
    <Button
      id={btnId}
      variant={btnVariant}
      onClick={onClick}
      size={btnSize}
      sx={{ color: `${btnColor}` }}
    >
      {btnContent}
    </Button>
  );
};
