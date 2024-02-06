import './Quote.scss';

export function Quote(props) {
  return (
    <div className='quote'>
      <span className='styled-quotation-mark'>,,</span>
      <p className='text'>{props.children}</p>
    </div>
  )
}