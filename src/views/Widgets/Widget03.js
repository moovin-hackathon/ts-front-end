import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { Col, Row } from 'reactstrap';
import Widget04 from './Widget04';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dataBox: PropTypes.func,
};

const defaultProps = {
  dataBox: () => ({ variant: 'facebook', friends: '-', feeds: '-' }),
};

class Widget03 extends Component {
  render() {

    // eslint-disable-next-line
    const { children, className, cssModule, dataBox, ...attributes } = this.props;

    // demo purposes only
    const data = dataBox();
    const variant = data.variant;

    if (!variant || ['Sapatênis', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0) {
      return (null);
    }

    const back = 'bg-facebook';

    const classCard = 'brand-card';
    const classCardHeader = classNames(`${classCard}-header`, back);
    const classCardBody = classNames(`${classCard}-body`);
    const classes = mapToCssModules(classNames(classCard, className), cssModule);

    return (
      <div className={classes}>
        <div className={classCardHeader}>
          <h3>{variant}</h3>
        </div>
        <div className={classCardBody}>
          <Row>
            <Col sm="6" md="6">
              <Widget04 icon="icon-people" color="info" header="87.500" value="25">Clientes</Widget04>
            </Col>
            <Col sm="6" md="6">
              <Widget04 icon="icon-basket-loaded" color="success" header="385" value="25">Produtos vendidos</Widget04>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Widget03.propTypes = propTypes;
Widget03.defaultProps = defaultProps;

export default Widget03;
