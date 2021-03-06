import { Item } from 'modules/item/types'

export type Props = {
  collectionId: string
  items: Item[]
  isLoading: boolean
}

export type MapStateProps = Pick<Props, 'items' | 'isLoading'>
export type OwnProps = Pick<Props, 'collectionId'>
