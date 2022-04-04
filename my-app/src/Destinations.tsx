import { Row, Col } from 'antd'
import City from './City'
import { useDestinationsContext } from './DestinationsContext'

const Destinations = (): JSX.Element => {

  const { destinations } = useDestinationsContext()
  return(

    <Row gutter={[16,24]}>

      {destinations?.map((destination) => (
          <Col key={destination.name} xl={8} md={12} xs={24}>
          <City destination={destination}></City>
        </Col>
      ))}

    </Row>
  )
}

export default Destinations;