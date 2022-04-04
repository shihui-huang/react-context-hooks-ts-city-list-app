
import { Button, Layout} from "antd";
import CityModal from "./CityModal";
import styles from './FrontLayout.module.scss'
import { useState } from 'react';
import {DestinationsProvider} from './DestinationsContext'
import Destinations from "./Destinations";

const FrontLayout = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  return(
    <Layout className={styles.layout}>
      <Layout.Header className={styles.header}>
        <div className={styles.title}>Destinations</div>
        <Button onClick={showModal}>+ AJOUTER</Button>
      </Layout.Header>
      <Layout.Content>
      <DestinationsProvider>
        <Destinations/>
        <CityModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
      </DestinationsProvider>
      </Layout.Content>
    </Layout>
  )
}

export default FrontLayout