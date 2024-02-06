import './Frame.scss';

export function Frame(props) {
  return (
    <div className='frame-container'>
      <img src={props.source} alt="Customer Satisfaction"/>
      <h1>{props.text}</h1>
    </div>
  )
}