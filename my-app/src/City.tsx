import React from 'react';
import { Card, Switch, Divider} from "antd";
import styles from './City.module.scss'

interface Props {
  destination : {
    nbHotel: number;
    nbResident: number;
    nbSalaryMoy: number;
    nbSurface: number;
    activated: boolean;
    address: string;
    imageLink: string;
    name: string;
  }
}

function City({ destination }:Props){
  const [disabled, setDisabled] = React.useState(false);

  const toggle = () => {
    setDisabled(!disabled);
  };

return (
  <Card className={styles.city}
        hoverable
        cover={<img className={styles.coverPhoto} alt="destination" src={`https://source.unsplash.com/random/?city,${destination.name}`} />}
      >
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.title}> {destination.name}</div> 
            <div className={styles.description}> {destination.address}</div> 
          </div>
          <div className={styles.switch}>
          <Switch onClick={toggle} defaultChecked={destination.activated}></Switch>
          </div>
        </div>
        <Divider />
        <div className={styles.cityData}>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>{ Number(destination.nbResident).toLocaleString('fr-FR')}</span>
              <span className={styles.unit}>M</span>
            </div>
            <div className={styles.dataLine}>Habitants</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>{ Number(destination.nbHotel).toLocaleString('fr-FR')} </span>
            </div>
            <div className={styles.dataLine}>Hôtels</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>{ Number(destination.nbSalaryMoy).toLocaleString('fr-FR')} </span>
              <span className={styles.unit}>€</span>
            </div>
            <div className={styles.dataLine}>Revenu Moy</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number}>{ Number(destination.nbSurface).toLocaleString('fr-FR')} </span>
            </div>
            <div className={styles.dataLine}>km²</div>
          </div>
        </div>
        </Card>
  )
}

export default City