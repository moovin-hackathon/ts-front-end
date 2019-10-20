import React, { Component } from 'react';
import './PaymentExpress.scss'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

class PaymentExpress extends Component {


  submitFormBuyProduct = async () => {
    console.log('caiu')
  }

  render() {
    return (
      <div className="app flex-row">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h4>Informe seus dados</h4>
                      <FormGroup>
                        <Label htmlFor="cpf">*Cpf</Label>
                        <Input type="text" id="cpf" required />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="name">*Nome completo</Label>
                        <Input type="text" id="name" required />
                      </FormGroup>
                      <Row>
                        <Col xs="5">
                          <FormGroup>
                            <Label htmlFor="genre">*Sexo</Label>
                            <Input type="select" name="genre" id="genre" required>
                            <option value="0">Selecione</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="7">
                          <FormGroup>
                            <Label htmlFor="date">*Data de nascimento</Label>
                            <Input type="date" id="date" name="date" placeholder="date" required />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="5">
                          <FormGroup>
                            <Label htmlFor="phone">Telefone</Label>
                            <Input type="text" id="phone" />  
                          </FormGroup>
                        </Col>
                        <Col xs="7">
                          <FormGroup>
                            <Label htmlFor="phone2">*Celular</Label>
                            <Input type="text" id="phone2" required />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                          <Label htmlFor="email">*Email</Label>
                          <Input type="text" id="email" required />  
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor="cep">*Cep</Label>
                          <Input type="text" id="cep" required />  
                      </FormGroup>
                      <FormGroup>
                          <Label htmlFor="address">*Endereço</Label>
                          <Input type="text" id="address" required/>  
                      </FormGroup>
                      <Row>
                        <Col xs="3">
                          <FormGroup>
                            <Label htmlFor="numberAddress">*Núm</Label>
                            <Input type="text" id="numberAddress" required/>  
                          </FormGroup>
                        </Col>
                        <Col xs="9">
                          <FormGroup>
                            <Label htmlFor="complementAddress">Complemento</Label>
                            <Input type="text" id="complementAddress" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                          <Label htmlFor="district">*Bairro</Label>
                          <Input type="text" id="district" required/>  
                      </FormGroup>
                      <Row>
                        <Col xs="8">
                          <FormGroup>
                            <Label htmlFor="city">*Cidade</Label>
                            <Input type="text" id="city" required/>  
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label htmlFor="state">*Estado</Label>
                            <Input type="text" id="state" required/>  
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

                <Card className="py-5">
                  <CardBody>
                    <table className="payment-resume-table">
                      <tbody>
                        <tr className="border-bot">
                          <th className="resume-title product-title">Produtos</th>
                          <th className="resume-title quantity-title">Qtde</th>
                          <th className="resume-title subtotal-title">Subtotal</th>
                        </tr>
                        <tr className="border-bot">
                          <td className="info-product">
                            <div className="informations">
                              <div className="thumbnail">
                                <img src="https://www.zariff.com.br/media/catalog/product/cache/1/thumbnail/60x60/0dc2d03fe217f8c83829496872af24a0/4/b/4b9a9888.jpg" className="thumbnail-product" alt="Apontador 1 Furo com Depósito AP10"/>
                              </div>
                              <p className="nome" title="Sapatênis Denim Democrata Joy Light">
                                Sapatênis Denim Democrata Joy Light
                              </p>
                            </div>
                          </td>
                          <td className="unity">1</td>
                          <td className="subtotal">R$ 144,90</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="payment-resume-table next">
                      <div className="resume-right">
                        <div className="resume-column t">
                          <span className="description t">Total:</span>
                          <span className="ctrValorTotalMoeda result t">R$ 144,90</span>
                        </div>
                      </div>
                    </div>
                    <div className="button-buy-area">
                      <Button color="success" onClick={this.submitFormBuyProduct} size="lg" block>Finalizar Compra</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PaymentExpress;
