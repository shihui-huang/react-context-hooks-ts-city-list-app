import { Modal, Button } from "antd";
import styles from "./CityModal.module.scss";
import { useDestinationsContext } from './DestinationsContext'

import {
  Form,
  Input,
  Switch,
} from 'antd';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
}

const CityModal = ({
  isModalVisible,
  setIsModalVisible
}: Props): JSX.Element => {

  const [form] = Form.useForm();
  const { destinations, setDestinations } = useDestinationsContext();

  const handleSubmit = (values: any ) => {
    setDestinations([...destinations, values])
    setIsModalVisible(false);
    onReset()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    onReset()
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Modal visible={isModalVisible} className={styles.cityModal} footer={null}  onCancel={handleCancel}>
      <Form
        form={form}
        onFinish={handleSubmit}
      >

        <div className={styles.title}>Ajouter une nouvelle destination</div>
        <Form.Item 
          name='name' 
          rules={[{
            required: true,
            message: 'Le nom de la destination ne peut pas être vide',
            whitespace: true
          }]}>
          <Input placeholder="Nom de la destination" />
        </Form.Item>

        <Form.Item 
          name="address"
          rules={[{
            required: true,
            message: 'L\'adress ne peut pas être vide'
          }]}>
          <Input placeholder="Adress" autoFocus/>
        </Form.Item>

        <Form.Item 
          name="imageLink" 
          initialValue={''}
          rules={[{ type: 'url'}]}>
          <Input placeholder="Lien de l'image"/>
        </Form.Item>

        <div className={styles.numberInput}>
          <Form.Item 
            name="nbResident"
            rules={[{
              required: true,
              pattern: /^([1-9]\d*\.?\d*)|(0\.\d*[1-9])/,
              message: 'Veuillez entrer un chiffre'
            }]}>
            <Input placeholder="Nb Habitants"/>
          </Form.Item>

          <Form.Item 
          name="nbHotel"
          rules={[{
            required: true,
            pattern: /^([1-9]\d*\.?\d*)|(0\.\d*[1-9])/,
            message: 'Veuillez entrer un chiffre'
          }]}>
            <Input placeholder="Nb Hôtels"/>
          </Form.Item>

          <Form.Item 
            name="nbSalaryMoy"
            rules={[{
              required: true,
              pattern: /^([1-9]\d*\.?\d*)|(0\.\d*[1-9])/,
              message: 'Veuillez entrer un chiffre'
            }]}>
            <Input placeholder="Revenu Moy"/>
          </Form.Item>

          <Form.Item 
            name="nbSurface"
            rules={[{
              required: true,
              pattern: /^([1-9]\d*\.?\d*)|(0\.\d*[1-9])/,
              message: 'Veuillez entrer un chiffre'
            }]}>
            <Input placeholder="Superficie"/>
          </Form.Item>
        </div>
        <Form.Item name="activated" label="Activer" initialValue={true} className={styles.switch}>
          <Switch defaultChecked/>
        </Form.Item>

      <div className={styles.buttons}>

        <Form.Item>
          <Button type="text" onClick={handleCancel}>
            CANCEL
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="text" htmlType="submit">
            CONFIRM
          </Button>
        </Form.Item>

      </div>
      </Form>
  </Modal>
  )
};

export default CityModal;
