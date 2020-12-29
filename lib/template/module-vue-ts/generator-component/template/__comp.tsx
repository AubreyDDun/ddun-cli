import {
  Component,
  Prop,
  Watch,
  Vue,
} from 'vue-property-decorator';

import {
  Row,
  Col,
  Card,
} from 'ant-design-vue';

// import {
// } from './types';

import styles from './<%= compName %>.less';

@Component
export default class <%= compName %> extends Vue {
  created() {
  }

  mounted() {
  }

  protected render() {
    return (
      <div class="container">
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" span={24}>
            <Card class={styles.part} hoverable={true}>
              <%= compName %>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
