import Row from './Row';
import FlexSpace from './FlexSpace';
import determineIcon from '../utils/descriptions';
import CardContainer from './CardContainer';

export default function Card(props) {
  const { city, temp, humidity, windSpeed, description, animate, error } = props;

  if (error) {
    return (
      <CardContainer animate={animate}>
        <span>Please enter a valid city</span>
        <i className="fa-solid fa-circle-exclamation"></i>
      </CardContainer>
    );
  }
  return (
    <CardContainer animate={animate}>
      <span className="city">{city}</span>
      <span className="temp">{temp}F°</span>
      <span>{description}</span>
      <i className={`fa-solid ${determineIcon(description)}`} />
      <Row>
        <Row className="extra-info">
          <span>Humidity</span>
          <span>{humidity}%</span>
        </Row>
        <FlexSpace />
        <Row className="extra-info">
          <span>Wind Speed</span>
          <span>{windSpeed}mph</span>
        </Row>
      </Row>
    </CardContainer>
  );
}
