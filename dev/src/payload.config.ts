import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import Examples from './collections/Examples'
import Users from './collections/Users'
import path from 'path'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
//@ts-ignore
import { labelPopoverPlugin } from '../../src/index'

export default buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    webpack: config => {
      const newConfig = {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...(config?.resolve?.alias || {}),
            react: path.join(__dirname, '../node_modules/react'),
            'react-dom': path.join(__dirname, '../node_modules/react-dom'),
            payload: path.join(__dirname, '../node_modules/payload'),
          },
        },
      }
      return newConfig
    },
  },
  editor: slateEditor({}),
  collections: [Examples, Users],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  //@ts-ignore
  plugins: [labelPopoverPlugin({})],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
