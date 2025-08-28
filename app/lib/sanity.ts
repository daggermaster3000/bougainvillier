import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'e266is0h',
  dataset: 'production',
  apiVersion: '2023-07-22',
  useCdn: true,
})
