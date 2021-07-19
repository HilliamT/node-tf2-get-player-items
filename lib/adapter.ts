import axios from "axios";
import { TF2PlayerItemsSchema } from './types';

interface TF2PlayerItemsResponse {
    result: TF2PlayerItemsSchema;
}

export function getResponseFromAPI(steamid: string, apikey: string): Promise<TF2PlayerItemsResponse> {
    const url = `http://api.steampowered.com/IEconItems_440/GetPlayerItems/v0001/?steamid=${steamid}&key=${apikey}`;
    return axios.get(url).then(({ data }) => data);
}