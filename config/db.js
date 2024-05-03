import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://borgimoatez:89hT04OIfSeLto1N@backend13.9mbim6x.mongodb.net/cheese_delivery').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.