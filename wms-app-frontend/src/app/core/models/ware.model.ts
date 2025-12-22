export interface Ware {
  id: number;
  barcode: string;
  name: string;
  quantity: number;
  price: number;
  placement_id: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface WareCreateFormModel {
  barcode: string;
  name: string;
  inventory: {
    price: number | null;
    quantity: number;
  };
  placement_id: number | null;
}

export const allWareAttributes: (keyof Ware)[] = [
  'id',
  'barcode',
  'name',
  'quantity',
  'price',
  'placement_id',
  'created_at',
  'updated_at',
];

export const wareAttributes: (keyof Ware)[] = allWareAttributes.filter(
  (key) => key !== 'id' && key !== 'updated_at',
);

export const attributeLabels: Record<keyof Ware, string> = {
  id: 'ID',
  barcode: 'Barcode',
  name: 'Name',
  quantity: 'Quantity',
  price: 'Price',
  placement_id: 'Placement',
  created_at: 'Created At',
  updated_at: 'Updated At',
};

export type WareLookupStatus = 'notSearched' | 'notFound' | 'found';

export type WareUpdateAction = 'increaseQuantity' | 'decreaseQuantity';
