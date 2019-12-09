"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/local";
// const MONGO_URI = 'mongodb://ashraf:N46ijjlds151004@ds151004.mlab.com:51004/byinspired';
mongoose.connect(MONGO_URI, function (err) {
    if (err) {
        console.log(err.message);
        console.log("not connected");
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.Userchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date_of_birth: { type: String, required: true },
});
var User = mongoose.model("user", exports.Userchema);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQyxtQ0FBc0M7QUFFdkMsOERBQThEO0FBQzdELElBQU0sU0FBUyxHQUFhLHFFQUFxRSxDQUFDO0FBR25HLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBUTtJQUNuQyxJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDOUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBUVUsUUFBQSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzNDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN0QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBSWhELENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQVEsTUFBTSxFQUFFLGlCQUFTLENBQUMsQ0FBQztBQUN0RCxrQkFBZSxJQUFJLENBQUMifQ==