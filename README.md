# node-tf2-get-player-items

### 📖 Table of Contents
- [👋 Introduction](#-introduction)
- [🔌 Getting Started](#-getting-started)
    - [The Schema](#iteminstance)
- [📚 Helpful Resources](#-helpful-resources)

## 👋 Introduction
This module is a wrapper for the [`IEconItems/GetPlayerItems`](https://wiki.teamfortress.com/wiki/WebAPI/GetPlayerItems) API specific for a user's backpack. It allows you to get the items for a player, providing game-specific item information not normally provided within the other generic inventory APIs.

## 🔌 Getting Started
The module simply exports a simple function `getTF2PlayerItems`.

##### Example Usage

```typescript
const steamid: string = `76561198081082634`;
const steamAPIKey: string = `abcdefghijk123456`; // your Steam API key

const playerItems: TF2PlayerItemsSchema = await getTF2PlayerItems(steamid, steamAPIKey);
```

### The Schema
The response returned from the API is a JSON object with the following structure:
```typescript
{
    result: TF2PlayerItemsSchema;
}
```

Deconstructing this, we get the `TF2PlayerItemsSchema` interface.

The schema is a simple object with the following properties:
- `status`: A number representing the status of the request.
- `num_backpack_slots`: A number representing the number of slots in the player's backpack.
- `backpack`: An array of `TF2PlayerItemsSchemaItem` objects.

##### TF2PlayerItemsSchemaItem
The `TF2PlayerItemsSchemaItem` interface is a simple object with the following properties:
- `id`: A number representing the item's ID.
- `original_id`: A number representing the item's original ID.
- `defindex`: A number representing the item's defindex.
- `level`: A number representing the item's level.
- `quality`: A number representing the item's quality.
- `inventory`: See [Inventory Token](https://wiki.teamfortress.com/wiki/WebAPI/GetPlayerItems#Inventory_token)
- `quantity`: A number representing the item's quantity.
- `origin?`: An integer representing the item's origin.
- `style?`: A number representing the item's style.
- `equipped?`: Represents the item's equipped status.
    - `class`: A number representing the item's class.
    - `slot`: A number representing the item's slot.
- `flag_cannot_trade?`: A boolean representing whether or not the item cannot be traded.
- `flag_cannot_craft?`: A boolean representing whether or not the item cannot be crafted.
- `custom_name`: A string representing the item's custom name.
- `custom_desc`: A string representing the item's custom description.
- `contained_item`: A `TF2PlayerItemsSchemaItem` representing the item's contained item.
- `attributes`: An array representing the item's attributes.
    - `defindex`: A number representing the attribute's defindex.
    - `value`: A number representing the attribute's value.
    - `float_value?`: A number representing the attribute's float value.
    - `account_info`: Represents account info associated with an attribute
        - `steamid`: A string representing the attribute's account ID.
        - `personaname`: A string representing the attribute's account name.


## 📚 Helpful Resources
- [WebAPI/GetPlayerItems](https://wiki.teamfortress.com/wiki/WebAPI/GetPlayerItems)
- [Inventory Token](https://wiki.teamfortress.com/wiki/WebAPI/GetPlayerItems#Inventory_token)
- [Qualities](https://wiki.teamfortress.com/wiki/WebAPI/GetSchema)