import { createDirectus, rest, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton } from '@directus/sdk';
import "dotenv"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  
  // Default URL if environment variable is not set
  const directusUrl = config.public.directus.url || 'https://portfolio.meeovicms.com';
  
  // Create Directus client with the URL
  const directus = createDirectus(directusUrl).with(rest());
  
  return {
    provide: { directus, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton },
  };
});