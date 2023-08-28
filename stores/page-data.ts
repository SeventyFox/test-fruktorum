import { defineStore } from 'pinia';
import { PageData, PageDataResponse, COMPONENT_TYPE } from '@/types';

export const usePageDataStore = defineStore('page-data', () => {
  const fetchPageData = async () =>
    await new Promise<PageData>((resolve, reject) => {
      const runtimeConfig = useRuntimeConfig();
      const route = useRoute();

      const arrayedSlug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug];
      const joinedSlug = `/${arrayedSlug.join('/')}`;

      useFetch<PageDataResponse>(runtimeConfig.public.apiBase, {
        query: {
          path: joinedSlug,
        },
      }).then(({ data, error }) => {
        const pageDataAdapter = (pageDataResponse: PageDataResponse): PageData => ({
          pageType: pageDataResponse.page_type,
          meta: pageDataResponse.meta,
          body: pageDataResponse.body.map(componentResponse =>
            componentResponse.type === COMPONENT_TYPE.ARTICLE_INTRO_BLOCK
              ? {
                ...componentResponse,
                data: {
                  title: componentResponse.data.title,
                  image: componentResponse.data.image,
                  readingTime: componentResponse.data.reading_time,
                  viewsCount: componentResponse.data.views_count,
                  shortDescription: componentResponse.data.short_description,
                },
              }
              : componentResponse
          ),
        });

        error.value !== null || data.value === null ? reject(error.value) : resolve(pageDataAdapter(data.value));
      });
    });

  return { fetchPageData };
});
