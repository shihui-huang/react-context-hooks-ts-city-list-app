import React from 'react';
import logo from './logo.svg';
import { Card, Col, Row, Button, Switch, Divider} from "antd";
import styles from './City.module.css'

function City(){
  const [disabled, setDisabled] = React.useState(false);

  const toggle = () => {
    setDisabled(!disabled);
  };

return (
  <Card className={styles.city}
        hoverable
        style={{ width: 350 }}
        cover={<img style={{width: 350, height:136}} alt="example" src="https://source.unsplash.com/random/?city,paris" />}
      >
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.title}> Europe Street beat</div> 
            <div className={styles.description}> www.instagram.com</div> 
          </div>
          <div className={styles.switch}>
          <Switch onClick={toggle} disabled={disabled} defaultChecked></Switch>
          </div>
        </div>
        <Divider style={{}}/>
        <div className={styles.cityData}>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>3.4</span>
              <span className={styles.unit}>M</span>
            </div>
            <div className={styles.dataLine}>Habitants</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>3.4</span>
              <span className={styles.unit}>M</span>
            </div>
            <div className={styles.dataLine}>Hôtels</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>3.4</span>
              <span className={styles.unit}>M</span>
            </div>
            <div className={styles.dataLine}>Revenu Moy</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>3.4</span>
              <span className={styles.unit}>M</span>
            </div>
            <div className={styles.dataLine}>km²</div>
          </div>

        </div>
        </Card>
)
}

export default City