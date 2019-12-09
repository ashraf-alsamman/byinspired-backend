"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../user"));
// We'll start with allUsers which will return
// every we have from our database
exports.allUsers = function (req, res) {
    var users = user_1.default.find(function (err, User) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(User);
        }
    });
};
exports.getUser = function (req, res) {
    var user = user_1.default.findById(req.params.id, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.deleteUser = function (req, res) {
    var user = user_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted User");
        }
    });
};
exports.updateUser = function (req, res) {
    console.log(req.body);
    var user = user_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(req.body);
        }
    });
};
exports.addUser = function (req, res) {
    var user = new user_1.default(req.body);
    user.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGlEQUEyQjtBQUUzQiw4Q0FBOEM7QUFDOUMsa0NBQWtDO0FBQ3ZCLFFBQUEsUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDaEQsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxJQUFTO1FBQ3hDLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBR1MsUUFBQSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUM3QyxJQUFJLElBQUksR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLElBQVM7UUFDMUQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUdTLFFBQUEsVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsSUFBSSxJQUFJLEdBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBUTtRQUN6RCxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFHUyxRQUFBLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLGNBQUksQ0FBQyxpQkFBaUIsQ0FDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2IsR0FBRyxDQUFDLElBQUksRUFDUixVQUFDLEdBQVEsRUFBRSxJQUFTO1FBQ2xCLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBSVMsUUFBQSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9