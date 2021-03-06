export interface singerListType {
  id: number
  picUrl: string
  name: string
  accountId: number
}

export interface singersStateType {
  singerList: singerListType[]
  enterLoading?: boolean
  pullUpLoading?: boolean
  pullDownLoading?: boolean
  category?: string
  singerType?: string
  alpha?: string
  offset?: string
}
