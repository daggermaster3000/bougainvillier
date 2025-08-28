import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // allows cropping/focus
      }
    }),
  ],
})
