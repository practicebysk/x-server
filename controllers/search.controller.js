import User from "../models/user.model.js";

export const searchUsers = async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: true, message: "Search query is required" });
    }

    try {
        const matchingUsers = await User.find(
            { username: { $regex: new RegExp(query, "i") } },
            "username fullName profileImg"
        );

        return res.json({
            error: false,
            users: matchingUsers,
            message: "Users matching the search query fetched successfully",
        });
    } catch (error) {
        console.error("Error searching users:", error);
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
        });
    }
};
