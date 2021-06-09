import React from 'react'

import Header from './components/Header'
import Content from './components/Content'
import SocialMediaBBC from './components/Social-Media-BBC'

import './styles/main.scss'

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Content />
      <SocialMediaBBC />
    </div>
  )
}

export default Main
