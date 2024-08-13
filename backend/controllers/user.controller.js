import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const LoggedInUserId = req.user._id;

        const users = await User.find({ _id: { $ne: LoggedInUserId } }).select("-password");
        
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getUsersForSidebar", error.message);
        res.status(500).json({ error: error.message });
    }
}