export interface DigikalaResult{
    status: string
    data: DigikalaData
}

export interface DigikalaItemResult{
    status: string
    data: DigikalaItem
}

export interface DigikalaData {
    sort_data: SortData
    pager: Pager
    form_data: any[]
    items: DigikalaItem[]
    meta_data: MetaData
}

export interface SortData {
    sort_column: string
    sort_order: string
}

export interface Pager {
    page: number
    item_per_page: number
    total_page: number
    total_rows: number
}

export interface DigikalaItem {
    id: number
    seller_id: number
    site: string
    is_active: boolean
    is_archived: boolean
    title: string
    product: Product
    shipping_type: string
    supplier_code?: string
    dk_lead_time: number
    sbs_lead_time: number
    stock: Stock
    price: Price
    consignment_cap: number
    fulfilment_and_delivery_cost: number
    extra: Extra
}

export interface Product {
    id: number
    category_id: number
    title: string
    image: string
    category_name_fa: string
    category_name_en: string
    moderation_status: string
}

export interface Stock {
    seller_stock: number
    dk_stock: number
    seller_reserved_stock: number
    dk_reserved_stock: number
    selling_stock: number
}

export interface Price {
    id: number
    selling_price: number
    rrp_price: number
    reference_price: number
    discount: number
    order_limit: number
    is_promotion_price: boolean
    tags: any
}

export interface Extra {
    gold_price_parameters: any
    buy_box: BuyBox
    promotion_data: PromotionData
    selling_channels: SellingChannels
    b2b_params: B2bParams
    shipping_options: ShippingOptions
}

export interface BuyBox {
    buy_box_price?: number
    is_buy_box_winner: boolean
    is_seller_buy_box_winner: boolean
    is_in_buy_box_challenge: boolean
    min_selling_price_limit: number
}

export interface PromotionData {
    is_incredible_promotion: boolean
    is_in_promotion: boolean
    promo_price: any
    is_promotion_management_visible_for_seller: boolean
}

export interface SellingChannels {
    product_selling_channel: ProductSellingChannel
    variant_selling_channel: VariantSellingChannel
}

export interface ProductSellingChannel {
    active_digikala: boolean
    active_digistyle: boolean
}

export interface VariantSellingChannel {
    active_digikala: boolean
    active_digistyle: boolean
}

export interface B2bParams {
    seller_b2b_active: boolean
    is_only_b2b: boolean
    is_b2b_active: boolean
    b2b_prices: B2bPrice[]
}

export interface B2bPrice {
    min: number
    max: number
    selling_price: number
}

export interface ShippingOptions {
    is_fbs_ability_enable: boolean
    is_fbd_active: boolean
    is_fbs_active: boolean
}

export interface MetaData {
    product_statuses: ProductStatuses
    leaf_categories: LeafCategories
    pricing_term_options: PricingTermOptions
}

export interface ProductStatuses {
    draft: string
    in_review: string
    waiting_for_confirm: string
    edit_after_approved: string
    approved: string
    in_review_after_approved: string
    duplicate: string
    removed: string
}

export interface LeafCategories {
    "8943": string
}

export interface PricingTermOptions {
    all: string
    buybox_winner: string
    buybox_losser: string
    buybox_challenge: string
    in_promotion: string
    in_incredible_promotion: string
    is_in_competition: string
    is_not_in_competition: string
}
