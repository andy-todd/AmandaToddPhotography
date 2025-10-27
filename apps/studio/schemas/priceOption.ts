import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'priceOption',
  title: 'Price Option',
  type: 'document',
  fields: [
    defineField({ name: 'label', type: 'string', validation: r => r.required() }),
    defineField({ name: 'type', type: 'string', options: { list: ['digital','print'] }, initialValue: 'print' }),
    defineField({ name: 'size', type: 'string' }),   // e.g., 30x45cm
    defineField({ name: 'paper', type: 'string' }),  // matte, lustre, fine-art
    defineField({ name: 'frame', type: 'string' }),  // black, oak, white
    defineField({ name: 'mat', type: 'string' }),    // none, white
    defineField({ name: 'price', type: 'number', validation: r => r.min(0) })
  ]
})
