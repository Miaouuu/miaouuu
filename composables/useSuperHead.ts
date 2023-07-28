export const useSuperHead = (title: string, description: string, ogImage?: string) => {
  useHead({
    title: `Brutal Theme | ${title}`,
    meta: [
      {
        name: 'title',
        content: `Brutal Theme | ${title}`,
      },
      {
        name: 'description',
        content: description,
      },
      {
        name: 'og:title',
        content: title,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'og:image',
        content: ogImage,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: ogImage,
      },
    ],
  })
}
