export function useCardWidget(props) {
  const title = <div>我是答案版大撒奥多多多多</div>
  const more = <span>more</span>
  const custom = <p>hello world . my name is sxx</p>
  const content = (
    <div>
      我都打算打打
      <p>helelelell家具家电</p>
    </div>
  )
  return {
    title,
    content,
    more,
    custom
  }
}
