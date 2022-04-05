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

const City = ({ destination }: Props): JSX.Element => {
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
            <div className={styles.title} data-testid="name" > {destination.name}</div> 
            <div className={styles.description} data-testid="address"> {destination.address}</div> 
          </div>
          <div className={styles.switch}>
          <Switch onClick={toggle} defaultChecked={destination.activated} data-testid="switch"></Switch>
          </div>
        </div>
        <Divider />
        <div className={styles.cityData}>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number} data-testid="nbResident">{ Number(destination.nbResident).toLocaleString('fr-FR')}</span>
              <span className={styles.unit}>M</span>
            </div>
            <div className={styles.dataLine}>Habitants</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number} data-testid="nbHotel">{ Number(destination.nbHotel).toLocaleString('fr-FR')} </span>
            </div>
            <div className={styles.dataLine}>Hôtels</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number} data-testid="nbSalaryMoy">{ Number(destination.nbSalaryMoy).toLocaleString('fr-FR')} </span>
              <span className={styles.unit}>€</span>
            </div>
            <div className={styles.dataLine}>Revenu Moy</div>
          </div>
          <div className={styles.data}>
            <div className={styles.dataLine}>
              <span className={styles.number} data-testid="nbSurface">{ Number(destination.nbSurface).toLocaleString('fr-FR')} </span>
            </div>
            <div className={styles.dataLine}>km²</div>
          </div>
        </div>
        </Card>
  )
}

export default City