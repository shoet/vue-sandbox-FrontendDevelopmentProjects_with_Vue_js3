export interface Blog {
  id: string;
  title: string;
  author: string;
  content: any;
  createdAt: Date;
  updatedAt: Date;
  thumbnailImage?: string;
  tags: string[];
}

export function blogParser(item: any): Blog {
  const fields = item.fields;
  const id = fields.id;
  const title = fields.title;
  const author = fields.author;
  const createdAt = fields.createdAt;
  const updatedAt = fields.updatedAt;
  const tags = fields.tags;
  const content = fields.content;
  let thumbnailImageUrl: string|undefined;
  if (fields.thumbnailImage) {
    thumbnailImageUrl = fields.thumbnailImage.fields.file.url;
  }
  console.log(item);
  return {
    id: id, 
    title: title,
    author: author,
    createdAt: createdAt,
    updatedAt: updatedAt,
    tags: tags,
    content: content,
    thumbnailImage: thumbnailImageUrl,
  }
}