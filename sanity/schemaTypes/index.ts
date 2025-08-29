import { type SchemaTypeDefinition } from 'sanity'
import galleryImage from './gallery'
import newsItem from './news'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsItem],
}
