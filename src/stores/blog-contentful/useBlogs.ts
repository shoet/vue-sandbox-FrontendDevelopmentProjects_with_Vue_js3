import { ref, onBeforeMount } from "vue"
import { createClient as ContentfulPreviewClient } from "contentful";
import { createClient as ContentfulManagementClient } from "contentful-management";

const previewClient = ContentfulPreviewClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID_BLOG,
  accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN
})

const managementClient = ContentfulManagementClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN
})

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

export const useBlogs = () => {
  const blogs = ref<Blog[]>([]);
  const isLoading = ref(false);
  const error = ref<any>(null);

  function blogParser(item: any): Blog {
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

  const getBlogs = async () => {
    isLoading.value = true;

    try {
      const res = await previewClient.getEntries({
        content_type: "blog",
        order: ['-fields.updatedAt']
      });

      blogs.value = res.items.map((item) => {
        return blogParser(item);
      });

    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }

  const getEnvironment = async () => {
    const space = await managementClient.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID_BLOG);
    const environment = await space.getEnvironment('master');
    return environment;
  }

  const addBlog = async (blog: Blog, callback?: (() => Promise<void>)) => {
    try {
      const environment = await getEnvironment();
      const itemFields: { [key: string]: { 'en-US': any } } = {};
      for (const key in blog) {
        const val = blog[key as keyof typeof blog];
        itemFields[key] = {'en-US': val};
      }
      const response = await environment.createEntryWithId(
        'blog', 
        blog.id,
        {
          'fields': itemFields
        }
      );
      await response.publish();
      if (callback) {
        await callback();
      }
      await getBlogs();
    } catch(err) {
      console.log(err);
    } 
  };

  const deleteBlog = async (blog: Blog, callback?: (() => Promise<void>)) => {
    try {
      const environment = await getEnvironment();
      const entry = await environment.getEntry(blog.id);
      await entry.unpublish();
      await environment.deleteEntry(blog.id);
      if (callback) {
        await callback();
      }
      await getBlogs();

    } catch(err) {
      console.log(err);
    }
  };

  onBeforeMount(getBlogs);

  return { blogs, isLoading, error, addBlog, deleteBlog }

}