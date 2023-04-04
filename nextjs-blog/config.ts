const __DEV__ = process.env.NODE_ENV === "development"

export default {
    mediaFileServerUrl: "https://app.mln.hk",
    extractionApiServerUrl: __DEV__ ? process.env.NEXT_PUBLIC_DEV_EXTRACTION_API_URL
        : process.env.NEXT_PUBLIC_PROD_EXTRACTION_API_URL,
    dataApiServerUrl: __DEV__ ? process.env.NEXT_PUBLIC_DEV_DATA_API_URL
        : process.env.NEXT_PUBLIC_PROD_DATA_API_URL,
    apiUrl: __DEV__?process.env.NEXT_PUBLIC_DEV_API_URL:process.env.NEXT_PUBLIC_PROD_API_URL,
    webUrl: __DEV__ ? process.env.NEXT_PUBLIC_DEV_WEBSITE_URL
        : process.env.NEXT_PUBLIC_PROD_WEBSITE_URL,
    apiNgrokUrl: __DEV__ ? process.env.NEXT_PUBLIC_NGROK_API_URL
        : process.env.NEXT_PUBLIC_PROD_API_URL,
    googleApiKey: process.env.GOOGLE_MAP_API_KEY,
    stripe: __DEV__ ? process.env.NEXT_PUBLIC_DEV_STRIPE_PUBLIC_KEY
        : process.env.NEXT_PUBLIC_PROD_STRIPE_PUBLIC6_KEY,
    app: {
        htmlAttributes: { lang: 'en' },
        title: 'Test',
        titleTemplate: 'Test - %s',
        meta: [
            {
                name: 'description',
                content: 'The best react universal starter boilerplate in the world.'
            }
        ],
        links: [
            'https://fonts.googleapis.com/css?family=Tangerine',
            '/css/main.css'
        ]
    }
};
