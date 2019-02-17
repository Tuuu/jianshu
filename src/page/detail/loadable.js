import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  /* eslint-disable-next-line */
  loader: () => import('./index'),
  loading() {
    return <div>正在加载...</div>
  },
})

export default () => <LoadableComponent />
