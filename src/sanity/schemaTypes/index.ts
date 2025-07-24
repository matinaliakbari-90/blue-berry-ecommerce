import { type SchemaTypeDefinition } from 'sanity'

import { categoryType } from './categoryType'
import { salesType } from './salesTypes'
import { productType } from './productType'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, salesType, productType, orderType],
}
