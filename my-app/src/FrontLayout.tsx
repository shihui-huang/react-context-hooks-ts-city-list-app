
import { Col, Row, Button, Layout} from "antd";
import City from './City';
import styles from './FrontLayout.module.css'

function FrontLayout(){
  return(
    <Layout className={styles.layout}>
      <Layout.Header className={styles.header}>
        <div className={styles.title}>Destinations</div>
        <Button>+ AJOUTER</Button>
      </Layout.Header>
      <Layout.Content>
        <Row gutter={[16,24]}>
          <Col sm={8}>
            <City></City>
          </Col>
          <Col sm={8}>
            <City></City>
          </Col>
          <Col sm={8}>
            <City></City>
          </Col>
          <Col sm={8}>
            <City></City>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default FrontLayout