// import {createCurrentUserHook, createClient} from "next-sanity"
import { useCurrentUser } from "@sanity/base/hooks";
import {createClient} from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const config = {
    dataset : "production",
    projectId : "s3vh9yon",
    apiVersion:"2021-10-21"
}

export const sanityClient = createClient(config)

export const urlFor = (source: SanityImageSource)=> imageUrlBuilder(config).image(source);

export const currentUser = useCurrentUser(config);