import "./Bitcoin.css"
interface Bitprops{
  src:string;
  alt?:string | undefined;
  width?: string;
  height?:string;
}
export const Bitcoin = (props:Bitprops) => {
  return (
    <div className="image">
        <img src={props.src} alt={props.alt} style={{width:`${props.width}`, height:`${props.height}`}}></img>
    </div>
  );
};
