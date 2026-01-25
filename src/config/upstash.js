import {Ratelimit, RateLimit} from "@upstash/ratelimit"
import {RateLimit} from "@upstash/redis"

import dotenv from "dotenv"

// create a rate limiter that allows 10 requests per 20 seconds
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: RateLimit.slidingWindow(10, "20 seconds")
})

export default rateLimit;