import * as React from 'react'
import { FooterProps } from 'decentraland-ui'
import { Footer as DappsFooter } from 'decentraland-dapps/dist/containers'

import { locales } from 'modules/translation/utils'

export default class Footer extends React.PureComponent<FooterProps> {
  componentDidMount(){
    const footer = document.querySelector('.copyright');
    if(footer){
      footer.innerHTML = footer.innerHTML.replace('Decentraland', 'Metaearth');
    }
  }

  render() {
    return <DappsFooter locales={locales} {...this.props} />
  }
}
