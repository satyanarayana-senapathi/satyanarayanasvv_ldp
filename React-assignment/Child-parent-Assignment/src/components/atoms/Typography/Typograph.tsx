import { Typography } from "@mui/material";
import "./Typograph.css"
interface InputProp{
    content:string;
    children:string;
    color?:string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline";
}
export const Typograph =(props:InputProp) =>{
    const {content,children,color,variant}=props
    return(
        <Typography variant={variant} id={`${children}` } color={color}>{content} </Typography>
    )
}