module.exports = () => {
    if (process.env.PORT === undefined) {
        process.env.PORT = 8081;
    }
};