module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "ADHSAKJFHAJSKFHASKLHFSABFNMVBSAFCHGBFSAUFUSFGFASCBFDUUW88WJDB",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.amplie.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.amplie.com" : "http://localhost:8000"
};