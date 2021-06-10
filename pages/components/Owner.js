export default function Owner(props) {
  return (
    <h1 className={props.className}>{props.owner.user.username}</h1>
  )
}