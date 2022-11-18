import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "j1msngbi",
    dataset: "production",
    apiVersion: '2021-10-21', // use a UTC date string
    useCdn: false, // `false` if you want to ensure fresh data
})