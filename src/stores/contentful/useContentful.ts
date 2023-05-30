import { ref, onBeforeMount, onMounted } from "vue"
import type { Ref } from "vue";
import { createClient as ContentfulPreviewClient } from "contentful";
import { createClient as ContentfulManagementClient } from "contentful-management";

const previewClient = ContentfulPreviewClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID_BLOG,
  accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN
})

const managementClient = ContentfulManagementClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN
})

interface Item {
  id: string;
}

// <Generics> extends interface でジェネリクスにフィールドを担保させる
export const useContentful = <T extends Item>(contentType: string, order: string, parseCallback: (value: any) => T) => {
  const data = ref<T[]>([]) as Ref<T[]>; // 型アサーションが必要
  const isLoading = ref<boolean>(false);
  const error = ref<any | null>(null);

  // TODO: order by set option
  const fetchData = async () => {
    try {
      isLoading.value = true;
      const res = await previewClient.getEntries({
        content_type: contentType,
        order: [`-fields.${order}`]
      });

      const items = res.items.map((item) => parseCallback(item));
      data.value = items;

    } catch(err) {
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

  const addItem = async (item: T, callback?: (() => Promise<void>)) => {
    try {
      const environment = await getEnvironment();
      const itemFields: { [key: string]: { 'en-US': any } } = {}; // index signature。 key=string型, value=(key=固定文字列, value=any型) で定義
      for (const key in item) {
        const val = item[key as keyof typeof item]; // オブジェクトからフィールド名を引っ張る
        itemFields[key] = {'en-US': val};
      }
      const response = await environment.createEntryWithId(
        contentType,
        item.id,
        {
          'fields': itemFields
        }
      );
      await response.publish();
      if (callback) {
        await callback();
      }
      await fetchData();
    } catch(err) {
      console.log(err);
    } 
  };

  const deleteItem = async (item: T, callback?: (() => Promise<void>)) => {
    try {
      const environment = await getEnvironment();
      const entry = await environment.getEntry(item.id);
      await entry.unpublish();
      await environment.deleteEntry(item.id);
      if (callback) {
        await callback();
      }
      await fetchData();

    } catch(err) {
      console.log(err);
    }
  };

  onBeforeMount(fetchData);

  return {
    data,
    isLoading,
    error,
    addItem,
    deleteItem
  }
}
