export enum NEWADVERT_FORM_NAMES {
    TITLE = "title",
    DESCRIPTION = "description",
    STATUS = "status",
    IMAGE = "image",
    PRICE = "price",
    // CATEGORY = "category",
  }

  export interface AdvertFormProps {
    onCreate?: ()=> void
    isProductsPage?: boolean
  }
