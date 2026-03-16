import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await rateLimit.limit("my-limit-key") // Here put user id / IP address in place of my-limit-key

        if(!success) {
            return res.status(429).json({
                message: "Too many requests. Please try after some time"
            })
        }

        next()
    } catch (error) {
        console.log("Rate Limit Error: ", error)
        next(error)
    }
}

export default rateLimiter;