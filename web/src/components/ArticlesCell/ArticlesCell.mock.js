// Define your own mock data here:
export const getTimestamp = (z = 0) => {
  let time = new Date()
  time = new Date(time.getTime() - z * 15e6)
  return time.toLocaleString()
}

export const standard = () => ({
  articles: [
    {
      id: 1,
      title: 'This tis artticle 1',
      body: 'This magic content is about the cool framework we are introducing today',
      createdAt: getTimestamp(10),
    },
    {
      id: 2,
      title: 'This tis artticle 2',
      body: 'This magic content is about the cool framework we are introducing today',
      createdAt: getTimestamp(60),
    },
    {
      id: 3,
      title: 'This tis artticle 3',
      body: 'This magic content is about the cool framework we are introducing today',
      createdAt: getTimestamp(5000),
    },
  ],
})
