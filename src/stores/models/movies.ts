import { ref, onBeforeMount } from "vue";

export interface Movie {
  id: string;
  title: string;
  producer: string;
  imageUrl: string;
  category?: string;
}

export function movieParser(item: any): Movie {
  const id = item.id;
  const title = item.title;
  const producer = item.title;
  let imageUrl = item.imageUrl;
  if (item.imageUrl) {
    imageUrl = item.imageUrl.fields.file.url;
  }
  let category;
  if (item.category) {
    category = item.category;
  }
  return {
    id: id, 
    title: title,
    producer: producer,
    imageUrl: imageUrl,
    category: category
  }
}