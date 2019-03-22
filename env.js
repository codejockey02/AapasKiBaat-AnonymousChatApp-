module.exports = () => {
    if (process.env.PORT === undefined) {
        process.env.PORT = 3000;
    }
};