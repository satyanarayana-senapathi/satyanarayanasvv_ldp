import axios from "axios";
import { useEffect, useState } from "react";
import "./AxiosApi.css";

type Clothes = {
  category: string;
  description: string;
  id: number;
  image: string;  
  price: number;
  rating: object;
  title: string;
};

const ApiProject = () => {
  const [list, setList] = useState<Clothes[] | null>();
  useEffect(() => {
    store();
  }, []);
  const store = async () => {
    const {data} = await axios.get("http://localhost:7007/source")
    setList(data);
  };
  return (
    <>   
      <h2>Shoppinng App</h2>
      <div className="container">
        {list ? list.map((values) => {
          return (
            <>
              <div className="box">
                <div className="image">
                  <img src={values.image} alt=''/>
                </div>
                <div className="content">
                  <h5>{values.title.slice(0,10)}</h5>
                  <p>Rs. {values.price}</p>
                </div>
              </div>
            </>
          );
        }): null}
      </div>
    </>
  );
};

export default ApiProject;
