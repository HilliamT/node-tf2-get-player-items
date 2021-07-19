import { TF2PlayerItemsSchema } from './types';
import { getResponseFromAPI } from './adapter';

export async function getTF2PlayerItems(steamid: string, apikey: string): Promise<TF2PlayerItemsSchema> {
    const { result } = await getResponseFromAPI(steamid, apikey);
    return result;
}