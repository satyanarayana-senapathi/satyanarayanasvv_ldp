import { Box } from "@mui/material";
import { Buttons } from "../atoms/Buttons";
import { TypographyText } from "../atoms/TypographyText";

import "../organsim/AmountCard.css";

export const Amount = ({ ...props }) => {
  return (
    <Box id={props.boxId}>
      <>
        <TypographyText {...props} />
        <Buttons {...props} />
      </>
    </Box>
  );
};
