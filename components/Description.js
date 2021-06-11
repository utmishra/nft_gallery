import styles from '../styles/Gallery.module.css';

export default function Description(props) {
  const needsProcessing = props.content.length > 100;
  if(props.expanded) {
    return (
      <>
        {props.content}
        {
          needsProcessing ?
            (<span className={styles['card-description-action']} onClick={props.handleCollapse}>{`  less`}</span>)
            :
            ''
        }        
      </>
    )
  }
  else {
    let truncatedContent = needsProcessing ? `${props.content.substring(0, 50)}...` : props.content;
    return (
      <>
        {truncatedContent}
        {
          needsProcessing
          ?
            (
              <span className={styles['card-description-action']} onClick={props.handleExpand}>{`  more`}</span>
            )
          :
            ''
        }
      </>
    )
  }
}