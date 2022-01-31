require('dotenv').config();

module.exports = {
    PORT: 3000,
    PUBLIC_KEY: "04d2c072cc4c41a737eab5bad0f71675e29e13efd7ada5540ce42b4bc64d12a848f4c01fa9f995494da715c37d545902238b325a28c48e14ac0f87f8be02a6183b",
    PRIVATE_KEY: process.env.PRIVATE_KEY,
}