import { MetaTags } from '@redwoodjs/web'

import Articles from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>This is the home page</p>
      <h2>Articles</h2>
      <Articles />
    </>
  )
}

export default HomePage
