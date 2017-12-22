// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Footer from '../Footer'
import Link from '../Link'
import Menu from '../Menu'
import Brand from '../Brand'
import GlobalSearch from '../GlobalSearch'
import MessengerFixed from '../MessengerFixed'
import { BigScreen } from '../Responsive'

import s from './Layout.css'

type Props = {
  children: any,
}

const Layout = ({ children }: Props) => (
  <div className={s.appWrapper}>
    <div className={`${s.mainContent} main-content`} id="main-layout">
      <GlobalSearch />
      <div>
        {children}
      </div>
      <Footer />
      <MessengerFixed />
    </div>
    <aside className={s.sidebar}>
      <Menu />
      <Brand />
      <BigScreen>
        <Link to="/stay-ahead" className={s.stayAhead}>Latest Developments</Link>
      </BigScreen>
    </aside>
  </div>
)

export default withStyles(s)(Layout)
