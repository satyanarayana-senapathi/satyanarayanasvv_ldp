import { Slider } from "@mui/material";

export const SliderBar = ({ ...props }) => {
  return (
    <Slider
      id={props.sliderId}
      orientation={props.orientation}
      min={0}
      max={1}
      valueLabelDisplay={props.valueDisplay}
      defaultValue={props.defaultValue}
      step={0.0000001}
      value={props.value}
      track={false}
      {...props}
    />
  );
};
