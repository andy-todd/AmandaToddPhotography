import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'coverPhoto', type: 'reference', to: [{ type: 'photo' }] }),
    defineField({ name: 'visibility', type: 'string', options: { list: ['public','private'] }, initialValue: 'public' }),
    defineField({ name: 'photos', type: 'array', of: [{ type: 'reference', to: [{ type: 'photo' }] }], options: { sortable: true } })
  ]
})
