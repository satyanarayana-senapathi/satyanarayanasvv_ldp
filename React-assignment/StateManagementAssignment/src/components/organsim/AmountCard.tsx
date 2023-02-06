import { Box, Stack } from "@mui/material";
import { useState, FC } from "react";
import { SliderBar } from "../atoms/Slider";
import { TypographyText } from "../atoms/TypographyText";
import { Amount } from "../molecules/Amount";
import "./AmountCard.css";

type cardProps = {
  boxId?: string;
  btnId?: string;
  sliderId?: string;
  typoId?: string;
  btnVariant?: "text" | "outlined" | "contained" | undefined;
  btnSize?: "small" | "medium" | "large" | undefined;
  btnContent?: string;
  orientation?: "vertical" | "horizontal";
  value?: number | number[] | undefined | string;
  valueDisplay?: "auto" | "on" | "off";
  typoContent?: string | number;
  typoVariant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | undefined;
  handleChange?: () => void;
};

export const AmountCard: FC<cardProps> = () => {
  const [value, setValue] = useState<number | string>(0);
  const [btcValue, setBtcValue] = useState<number>(0);

  const handleChange = (event: Event, newValue: number) => {
    const calculate = newValue * 3497866.84;
    const amount = calculate.toLocaleString();
    setValue(amount);
    setBtcValue(newValue);
  };
  const onClick = () => {
    setValue("3,497,866.84");
    setBtcValue(1);
  };

  return (
    <Stack alignItems="center">
      <Box className="main">
        <TypographyText
          typoId="amount"
          typoContent="Amount Details"
          typoVariant="body1"
        />
        <Amount
          boxId="amount-box"
          typoVariant="h6"
          typoContent={`$ ${value}`}
          btnVariant={"outlined"}
          btnContent="BUY MAX"
          onClick={onClick}
        />
        <Stack id="slide-typo" direction="row" alignItems="start">
          <SliderBar
            sliderId="slide-middle"
            orientation={"vertical"}
            value={0.5}
            valueDisplay="off"
          />
          <TypographyText
            typoId="typo-middle"
            typoVariant="body1"
            typoContent="1BTC = $ 3,497,866.84"
          />
        </Stack>
        <Amount
          boxId="btc-box"
          typoVariant="body1"
          typoContent={btcValue}
          btnVariant={"text"}
          btnContent="BTC"
          btnColor="#7D7D89"
        />
      </Box>
      <SliderBar
        sliderId="slide-last"
        orientation={"horizontal"}
        onChange={handleChange}
        value={btcValue}
        valueDisplay="auto"
      />
    </Stack>
  );
};
