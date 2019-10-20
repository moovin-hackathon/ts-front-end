import React, { Component } from 'react';
import axios from 'axios'
import { Col, Row, Card, CardBody, FormGroup, Label, Input, CardFooter, Button } from 'reactstrap';
import './Announcement.scss'

class Create extends Component {
  state = {
    nameCampaign: '',
    dateInit: '',
    dateEnd: '',
    public: '',
    nameAnnouncement: '',
    fileInput: ''
  }
  submitFormAdPublication = async () => {
    await axios.post('http://localhost:3333/camapaigns', {
      "name": this.state.nameCampaign,
      "date_start": this.state.dateInit,
      "date_end": this.state.dateEnd,
      "category_id": 1
    })
    return alert('sucesso')
  }
  handleSubmit = async (e) => {
    console.log(e)
  }
  onChange = async (e) => {
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state)
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="8">
            <Card>
              <CardBody>
                <form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="name">Nome da Campanha</Label>
                        <Input type="text" id="nameCampaign" onChange={this.onChange} required />
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="name">Nome do anúncio</Label>
                        <Input type="text" id="nameAnnouncement" onChange={this.onChange} required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="date">Data de inicio</Label>
                        <Input type="date" id="dateInit" name="date" onChange={this.onChange} placeholder="date" required />
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="date">Data final</Label>
                        <Input type="date" id="dateEnd" name="date" placeholder="date" onChange={this.onChange} required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="public">Publico alvo</Label>
                        <Input type="select" name="public" id="public" onChange={this.onChange} required>
                          <option value="0">Selecione</option>
                          <option value="1">Sapatênis</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="file-input">Midia</Label>
                        <Input type="file" id="file-input" onChange={this.onChange} name="file-input" />
                      </FormGroup>
                    </Col>
                  </Row>
                </form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col col="6" sm="4" md="6" xl className="mb-3 mb-xl-0">
                    <Button type="submit" size="sm" color="success" onClick={this.submitFormAdPublication} className="f-r" ><i className="fa fa-dot-circle-o"></i> Enviar</Button>
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
