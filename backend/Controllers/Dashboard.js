const Rating = require("../Models/Rating");
const Shop = require("../Models/Shop");
const User = require("../Models/User");

exports.dashboard=async(req,res)=>{
    try {
        const totalUsers = await User.countDocuments({});
        const totalShops = await Shop.countDocuments({});
        const totalRatings = await Rating.countDocuments({});
        const adminCount = await User.countDocuments({ role: "Admin" });
        const userCount = await User.countDocuments({ role: "User" });
        const shopkeeperCount = await User.countDocuments({ role: "Shopkeeper" });

        res.status(200).json({
            totalUsers,
            totalShops,
            totalRatings,
            Admin: adminCount,
            User: userCount,
            Shopkeeper: shopkeeperCount
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Error fetching stats', error });
    }
}