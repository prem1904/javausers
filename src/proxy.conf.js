const PROXY_CONFIG = [
    {
        context: [
            "/support",
            "/asset",
            "/userManagements",
            "/assetManagements"

        ],
        target: "https://desolate-retreat-47606.herokuapp.com",
        secure: false,
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;