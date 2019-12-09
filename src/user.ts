 import mongoose = require('mongoose');

//const MONGO_URI: string = "mongodb://127.0.0.1:27017/local";
 const MONGO_URI : string  = 'mongodb://ashraf:N46ijjlds151004@ds151004.mlab.com:51004/byinspired';

 
mongoose.connect(MONGO_URI, (err: any) => {
  if (err) {
    console.log(err.message);
    console.log("not connected");
  } else {
    console.log("Successfully Connected!");
  }
}); 

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  date_of_birth: string;
}

export const Userchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date_of_birth: { type: String, required: true },
   


});

const User = mongoose.model<IUser>("user", Userchema);
export default User;