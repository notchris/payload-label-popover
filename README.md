# Payload Label Popover Plugin
#### Adds a descriptive popover to [Payload](https://payloadcms.com/) field labels (using [React Tiny Popover](https://github.com/alexkatz/react-tiny-popover)).

![image](https://github.com/notchris/payload-label-popover/blob/main/example.png?raw=true)


## Installation

```bash
  yarn add payload-label-popover
  #OR
  npm i payload-label-popover
```

## Basic Usage

Import the plugin and add it to your payload configuration file.

```ts
// Add the plugin to the "plugins" array in your payload config
{
  // ... Rest of payload config
  plugins: [labelPopoverPlugin({})]
}
```

```ts
// Enable a popover on a field using the `custom` object
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
```

### Note

Popovers currently support text content, but if there is a need I can add the ability to use a custom component. 