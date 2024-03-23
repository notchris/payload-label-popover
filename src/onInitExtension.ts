import type { Payload } from 'payload/dist/payload'

export const onInitExtension = (pluginOptions: {}, payload: Payload): void => {
  const { express: app } = payload

  if (!app) return

  try {
  } catch (err: unknown) {
    payload.logger.error({ msg: 'Error in onInitExtension', err })
  }
}
