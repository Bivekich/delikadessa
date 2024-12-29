import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'o43vbwjs',
  dataset: 'production',
  apiVersion: 'v1',
  useCdn: true,
});

export const getGallery = async () => {
  const gallery = await client.fetch(
    '*[_type == "gallery"]{title, "image": image.asset->url, type}'
  );
  return gallery;
};

export const getMenu = async () => {
  const menu = await client.fetch(
    '*[_type == "menu"]{title, "pdf": pdf.asset->url, "image": image.asset->url}'
  );
  return menu;
};

export const getCakes = async () => {
  const cakes = await client.fetch(
    '*[_type == "cakes"]{title, "image": image.asset->url}'
  );
  return cakes;
};

export const getContacts = async () => {
  const contacts = await client.fetch(
    '*[_type == "contacts"][0]{worktime, forconnect, address, shortaddress}'
  );
  return contacts;
};

export const getAboutUs = async () => {
  const aboutUs = await client.fetch(
    '*[_type == "aboutUs"][0]{title, description, advantages}'
  );
  return aboutUs;
};

export const getTerrassa = async () => {
  const terrace = await client.fetch(
    '*[_type == "terassa"][0]{title, shortDescription, fullDescription, "image": image.asset->url, worktime}'
  );
  return terrace;
};

export const getMainpage = async () => {
  const mainpage = await client.fetch(
    '*[_type == "mainpage"][0]{title, description, "image": image.asset->url}'
  );
  return mainpage;
};

export const getSeafood = async () => {
  const seafood = await client.fetch(
    `*[_type == "seafood"] | order(order asc) {
      _id,
      title,
      description,
      price,
      unit,
      "image": image.asset->url
    }`
  );
  return seafood;
};
