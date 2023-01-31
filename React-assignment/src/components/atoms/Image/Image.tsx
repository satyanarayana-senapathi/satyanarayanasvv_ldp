interface Bitprops{
  src:string;
  alt?:string | undefined;
  width?: string;
  height?:string;
}
export const Image = (props:Bitprops) => {
  const {src,alt,width,height}=props
  return (
    <div>
        <img src={src} alt={alt} style={{width:`${width}`, height:`${height}`}}></img>
    </div>
  );
};
