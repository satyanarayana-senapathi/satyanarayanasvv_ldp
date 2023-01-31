import { Box, Stack} from "@mui/material";
import { Typograph } from '../atoms/Typography/Typograph';
import {Image} from '../atoms/Image/Image';
import "./TotalBalanceCard.css"
interface Cardprops{
  borderColor?: string;
  location?: 'left' | 'right' | 'top' | 'bottom';
  fontColor?: string ;
}

export const TotalBalanceCard = (props:Cardprops) => {
  const{borderColor,location,fontColor}=props
  return (
    <Box sx={{border:`1px solid ${borderColor}`}}
      className={`card ${location}`}>
      <Typograph variant='h5' content="Total Balance" children="heading" color={fontColor}/>
      <Box className="in-card" sx={{border:`1px solid ${borderColor}`}}>
        <Stack direction="row" spacing={2}>
          <Image src='images/Bitcoin.svg' alt='Bitcoin image' width='40px'/>
          <Typograph content="Bitcoin" children="bitcn" color={fontColor} />
          <Typograph variant="h5" content="0.0234510 BTC" children="rightBill" color={fontColor} />
        </Stack>
      </Box>
    </Box>
  );
};
