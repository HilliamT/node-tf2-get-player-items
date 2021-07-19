export interface TF2PlayerItemsSchema {
    status: number;
    num_backpack_slots: number; 
    items: TF2PlayerItemsSchemaItem[];   
}

interface TF2PlayerItemsSchemaItem {
    id: number;
    original_id: number;
    defindex: number;
    level: number;
    quality: number;
    inventory: number;
    quantity: number;
    origin?: number;
    style?: number;
    equipped?: {
        class: number;
        slot: number;
    }[];
    flag_cannot_trade?: boolean;
    flag_cannot_craft?: boolean;
    custom_name? : string;
    custom_desc? : string;
    contained_item? : TF2PlayerItemsSchemaItem;
    attributes?: {
        defindex: number;
        value: number | string;
        float_value?: number;
        account_info?: {
            steamid: number;
            personaname: string;
        }
    }[];
}