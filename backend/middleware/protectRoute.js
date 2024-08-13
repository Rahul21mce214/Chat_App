import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - no token provided" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.status(401).json({ error: "Unauthorized - invalid token" });
    }

    const user = await userModel.findById(verified.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "Unauthorized - user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default protectRoute;
