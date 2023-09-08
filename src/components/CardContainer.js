import Stack from './Stack';

export default function CardContainer(props) {
  const { animate, children } = props;
  return (
    <div className="card animation">
      <Stack className={`${animate && 'fade-in'}`}>{children}</Stack>
    </div>
  );
}
