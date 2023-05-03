export default function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.url}></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}