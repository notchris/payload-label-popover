import type { Plugin } from 'payload/config'

import { onInitExtension } from './onInitExtension'
import { LabelPopover } from './LabelPopover'

export const labelPopoverPlugin =
  (pluginOptions: {}): Plugin =>
  incomingConfig => {
    let config = { ...incomingConfig }

    config.admin = {
      ...(config.admin || {}),
      components: {
        ...(config.admin?.components || {}),
      },
    }

    config.collections = [...(config.collections || [])]

    if (config.collections !== undefined) {
      config.collections.forEach(collection => {
        collection.fields.forEach(field => {
          if (!field.admin) field.admin = {}
          field.admin.components = {
            ...(field.admin.components || {}),
            // Ignore the Label prop because the Payload type seems to be incorrect
            //@ts-ignore
            Label: props => {
              return LabelPopover({
                ...props,
                showLabelPopover: field.custom?.showLabelPopover,
                labelPopover: field.custom?.labelPopover,
              })
            },
          }
        })
      })
    }

    config.onInit = async payload => {
      if (incomingConfig.onInit) await incomingConfig.onInit(payload)
      onInitExtension(pluginOptions, payload)
    }

    return config
  }
