export default function Heading(props) {
  return (
    <div className="heading-box">
      <div className="heading-show">{props.show}</div>
      <div className="heading-title">{props.title}</div>
    </div>
  );
}
