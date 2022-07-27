import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "8jux11cv",
  dataset: "production",
  apiVersion: "2022-07-26",
  useCdn: true,
  token:
    "skvYqFdAhTT5ibCZu3n7cmZRT1fRsmNxcC6SS9odUVfyJKPmHNVQJNKzAKUTah5P2336ti2QQMjwdhrw4oJdCRD53zpObdfWmHARu3UaIHOYjv6sNWexnYecuQmric4Nit3e6qsHk9fkosuGRX9FYWeeMT7ZWCEOzY0pqmH026qn2Fz4YU2y",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
