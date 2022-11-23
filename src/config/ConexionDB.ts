import { connect } from "mongoose";

const ConexionDB = () => {
  const URL = String(process.env.DB_MONGO);
  connect(URL)
    .then(()=>{
        console.log("Estas conectado a MongoDB", process.env.DB_MONGO);
    })
    .catch((miError) => {
      console.log("No encuentro a MongoDV", miError);
    });
};

export default ConexionDB;
