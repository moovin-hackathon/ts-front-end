import React, { Component } from 'react';
import { Col, Row, Card, CardBody, FormGroup, Label, Input, CardFooter, Button } from 'reactstrap';
import './Announcement.scss'

class Create extends Component {
    submitFormAdPublication = async () => {
        console.log('caiu')
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="8">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="name">Nome da Campanha</Label>
                                            <Input type="text" id="nameCampaign" required />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="name">Nome do anúncio</Label>
                                            <Input type="text" id="nameAnnouncement" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="date">Data de inicio</Label>
                                            <Input type="date" id="dateInit" name="date" placeholder="date" required />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="date">Data final</Label>
                                            <Input type="date" id="dateEnd" name="date" placeholder="date" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="public">Publico alvo</Label>
                                            <Input type="select" name="public" id="public" required>
                                                <option value="0">Selecione</option>
                                                <option value="1">Sapatênis</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="file-input">Midia</Label>
                                            <Input type="file" id="file-input" name="file-input" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Row>
                                    <Col col="6" sm="4" md="6" xl className="mb-3 mb-xl-0">
                                        <Button type="submit" size="sm" color="success" className="f-r" onClick={this.submitFormAdPublication}><i className="fa fa-dot-circle-o"></i> Enviar</Button>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
  }
}

export default Create;
