import { Slider } from "@mui/material";

export const SliderBar = ({ ...props }) => {
  const { sliderId, orientation, valueDisplay, defaultValue, value, onChange } =
    props;
  return (
    <Slider
      id={sliderId}
      orientation={orientation}
      min={0}
      max={1}
      valueLabelDisplay={valueDisplay}
      defaultValue={defaultValue}
      step={0.0000001}
      onChange={onChange}
      value={value}
      track={false}
      {...props}
    />
  );
};
