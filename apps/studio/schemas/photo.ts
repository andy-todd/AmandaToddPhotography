import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true }, validation: r => r.required() }),
    defineField({ name: 'alt', type: 'string' }),
    defineField({ name: 'exif', type: 'object', fields: [
      { name: 'camera', type: 'string' },
      { name: 'lens', type: 'string' },
      { name: 'iso', type: 'number' },
      { name: 'aperture', type: 'string' },
      { name: 'shutter', type: 'string' },
      { name: 'focal', type: 'string' }
    ]}),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'galleries', type: 'array', of: [{ type: 'reference', to: [{ type: 'gallery' }] }] })
  ]
})
