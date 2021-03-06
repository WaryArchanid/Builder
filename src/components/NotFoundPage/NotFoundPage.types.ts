import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'

export type Props = {
  onNavigate: (path: string) => void
}

export type State = {
  isLoading: boolean
}

export type MapDispatchProps = Pick<Props, 'onNavigate'>
export type MapDispatch = Dispatch<CallHistoryMethodAction>
