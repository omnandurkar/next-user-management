const { default: mongoose } = require("mongoose");

export const connectDB = async () => {
    // const url = process.env.MONGODB_URI;
    const url = 'mongodb+srv://nandurkarom172:Om123456789@nextjs.yxq3g.mongodb.net/usermanagement';

    mongoose
    .connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

};

