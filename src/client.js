import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"


export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2023-04-11',
    // token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
}