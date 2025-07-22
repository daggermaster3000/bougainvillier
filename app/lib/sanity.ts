import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'ee61dn8s',
  dataset: 'production',
  apiVersion: '2023-07-22',
  useCdn: true,
})
