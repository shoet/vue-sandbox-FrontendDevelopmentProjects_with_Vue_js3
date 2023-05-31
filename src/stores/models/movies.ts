export interface Movie {
  id: string;
  title: string;
  producer: string;
  imageUrl: string;
  category?: string;
}

export function movieParser(item: any): Movie {
  const fields = item.fields;
  const id = fields.id;
  const title = fields.title;
  const producer = fields.producer;
  let imageUrl = fields.image;
  if (fields.image) {
    imageUrl = fields.image.fields.file.url;
  }
  let category;
  if (fields.category) {
    category = fields.category;
  }
  return {
    id: id, 
    title: title,
    producer: producer,
    imageUrl: imageUrl,
    category: category
  }
}