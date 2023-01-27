import React from "react";
import { Box, Stack} from "@mui/material";
import { Typograph } from "../atoms/parentChildAssignment/Typography/Typograph";
import { Bitcoin } from "../atoms/parentChildAssignment/BitCoinIcon/Bitcoin";
import "./TotalBalanceCard.css"
import "../atoms/parentChildAssignment/BitCoinIcon/Bitcoin.css"
interface Cardprops{
  borderColor?: string;
  location?: 'left' | 'right' | 'top' | 'bottom';
  fontColor?: string ;
  src:string;
}

export const TotalBalanceCard = (props:Cardprops) => {
  return (
    <Box sx={{border:`1px solid ${props.borderColor}`}}
      className={`card ${props.location}`}>
      <Typograph variant='h5' content="Total Balance" children="heading" color={props.fontColor}/>
      <Box className="in-card" sx={{border:`1px solid ${props.borderColor}`}}>
        <Stack direction="row" spacing={2}>
          <Bitcoin src={props.src} alt='Bitcoin image'/>
          <Typograph content="Bitcoin" children="bitcn" color={props.fontColor} />
          <Typograph variant="h5" content="0.0234510 BTC" children="rightBill" color={props.fontColor} />
        </Stack>
      </Box>
    </Box>
  );
};
