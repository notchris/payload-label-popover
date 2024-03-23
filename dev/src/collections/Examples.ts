import { CollectionConfig, Field } from 'payload/types'
// Example Collection - For reference only, this must be added to payload.config.ts to be used.

const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Hello World',
      custom: {
        labelPopover: 'This is a test to see if this popover will work and wrap correctly.',
        showLabelPopover: true,
      },
    },
  ],
}

export default Examples
