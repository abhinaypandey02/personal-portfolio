import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  return <main className={'p-10 font-bold'}>HELLO WORLD! Let's begin coding</main>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
