export default function CardHeader(props) {
  return (
    <div className="flex items-baseline justify-between">
      <h2 className="font-medium">{props.title}</h2>
      <div className="flex gap-1 cursor-pointer">
        <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
        <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
        <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
      </div>
    </div>
  );
}
