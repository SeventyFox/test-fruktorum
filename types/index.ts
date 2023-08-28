export enum PAGE_TYPE {
  HOME = 'home',
  ARTICLE = 'article',
}

export enum COMPONENT_TYPE {
  TEXT_BLOCK = 'text_block',
  IMAGE_BLOCK = 'image_block',
  SLIDER_BLOCK = 'slider_block',
  SUBSCRIBE_FORM_BLOCK = 'subscribe_form_block',
  CTA_FORM_BLOCK = 'cta_form_block',
  ARTICLE_LIST_BLOCK = 'article_list_block',
  ARTICLE_INTRO_BLOCK = 'article_intro_block',
}

interface ComponentBase {
  id: string;
}

export type ComponentTextData = string;

interface ComponentTextResponse extends ComponentBase {
  type: COMPONENT_TYPE.TEXT_BLOCK;
  data: ComponentTextData;
}

type ComponentText = ComponentTextResponse;

export interface ComponentImageData {
  src: string;
  caption: string;
}

interface ComponentImageResponse extends ComponentBase {
  type: COMPONENT_TYPE.IMAGE_BLOCK;
  data: ComponentImageData;
}

type ComponentImage = ComponentImageResponse;

export type ComponentSliderData = Array<string>;

interface ComponentSliderResponse extends ComponentBase {
  type: COMPONENT_TYPE.SLIDER_BLOCK;
  data: ComponentSliderData;
}

type ComponentSlider = ComponentSliderResponse;

export type ComponentSubscribeFormData = '';

interface ComponentSubscribeFormResponse extends ComponentBase {
  type: COMPONENT_TYPE.SUBSCRIBE_FORM_BLOCK;
  data: ComponentSubscribeFormData;
}

type ComponentSubscribeForm = ComponentSubscribeFormResponse;

export type ComponentCtaFormData = '';

interface ComponentCtaFormResponse extends ComponentBase {
  type: COMPONENT_TYPE.CTA_FORM_BLOCK;
  data: ComponentCtaFormData;
}

type ComponentCtaForm = ComponentCtaFormResponse;

export interface ComponentArticleListData {
  title: string;
  articles: Array<{
    title: string;
    link: string;
    image: string;
  }>;
}

interface ComponentArticleListResponse extends ComponentBase {
  type: COMPONENT_TYPE.ARTICLE_LIST_BLOCK;
  data: ComponentArticleListData;
}

type ComponentArticleList = ComponentArticleListResponse;

interface ComponentArticleIntroResponse extends ComponentBase {
  type: COMPONENT_TYPE.ARTICLE_INTRO_BLOCK;
  data: {
    title: string;
    image: string;
    reading_time: number;
    views_count: number;
    short_description: string;
  };
}

export interface ComponentArticleIntroData {
  title: string;
  image: string;
  readingTime: number;
  viewsCount: number;
  shortDescription: string;
}

interface ComponentArticleIntro extends ComponentBase {
  type: COMPONENT_TYPE.ARTICLE_INTRO_BLOCK;
  data: ComponentArticleIntroData;
}

type ComponentResponse =
  | ComponentTextResponse
  | ComponentImageResponse
  | ComponentSliderResponse
  | ComponentSubscribeFormResponse
  | ComponentCtaFormResponse
  | ComponentArticleListResponse
  | ComponentArticleIntroResponse;

export type Component =
  | ComponentText
  | ComponentImage
  | ComponentSlider
  | ComponentSubscribeForm
  | ComponentCtaForm
  | ComponentArticleList
  | ComponentArticleIntro;

export interface PageDataResponse {
  page_type: PAGE_TYPE;
  meta: {
    title: string;
    description: string;
    slug: string;
  };
  body: Array<ComponentResponse>;
}

export interface PageData {
  pageType: PAGE_TYPE;
  meta: {
    title: string;
    description: string;
    slug: string;
  };
  body: Array<Component>;
}
