import React, { Component } from 'react';
import './PaymentExpress.scss'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import axios from 'axios';

class PaymentExpress extends Component {


  handleSubmit = async () => {
    const customer = {}
    customer.name = document.querySelector('[data-adp=customer-name]').value
    customer.cpf = document.querySelector('[data-adp=customer-cpf]').value
    customer.gender = document.querySelector('[data-adp=customer-gender]').value
    customer.bithday = document.querySelector('[data-adp=customer-bithday]').value
    customer.phone = document.querySelector('[data-adp=customer-phone]').value
    customer.email = document.querySelector('[data-adp=customer-email]').value
    customer.cep = document.querySelector('[data-adp=customer-cep]').value
    customer.address = document.querySelector('[data-adp=customer-address]').value + ' ' + document.querySelector('[data-adp=customer-number-address]').value + ' ' + document.querySelector('[data-adp=customer-state]').value
    customer.city = document.querySelector('[data-adp=customer-city]').value
    customer.state = document.querySelector('[data-adp=customer-state]').value

    const product = {}
    product.name = document.querySelector('[data-adp=product-name]').value
    product.amount = document.querySelector('[data-adp=product-amount]').value
    product.price = document.querySelector('[data-adp=product-price]').value
    product.ref = document.querySelector('[data-adp=product-ref]').value
    console.log({ customer, product })

    axios.post('http://localhost:3333/purchases', {
      customer,
      product
    })
    return false
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
                      <input type="hidden" data-adp="product-name" value="Sapatênis Denim Democrata Joy Light"></input>
                      <input type="hidden" data-adp="product-amount" value="1" ></input>
                      <input type="hidden" data-adp="product-price" value="144.90" ></input>
                      <input type="hidden" data-adp="product-ref" value="123qwe123" ></input>
                      <h4>Informe seus dados</h4>
                      <FormGroup>
                        <Label htmlFor="cpf">*Cpf</Label>
                        <Input type="text" data-adp="customer-cpf" id="cpf" required />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="name">*Nome completo</Label>
                        <Input type="text" data-adp="customer-name" id="name" required />
                      </FormGroup>
                      <Row>
                        <Col xs="5">
                          <FormGroup>
                            <Label htmlFor="genre">*Sexo</Label>
                            <Input type="select" data-adp="customer-gender" name="genre" id="genre" required>
                              <option value="0">Selecione</option>
                              <option value="1">Masculino</option>
                              <option value="2">Feminino</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="7">
                          <FormGroup>
                            <Label htmlFor="date">*Data de nascimento</Label>
                            <Input type="date" id="date" data-adp="customer-bithday" name="date" placeholder="date" required />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="5">
                          <FormGroup>
                            <Label htmlFor="phone">Telefone</Label>
                            <Input type="text" data-adp="customer-phone" id="phone" />
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
                        <Input type="text" id="email" data-adp="customer-email" required />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="cep">*Cep</Label>
                        <Input type="text" id="cep" required data-adp="customer-cep" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="address">*Endereço</Label>
                        <Input type="text" id="address" data-adp="customer-address" required />
                      </FormGroup>
                      <Row>
                        <Col xs="3">
                          <FormGroup>
                            <Label htmlFor="numberAddress">*Núm</Label>
                            <Input type="text" id="numberAddress" data-adp="customer-number-address" required />
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
                        <Input type="text" id="district" required data-adp="customer-district" />
                      </FormGroup>
                      <Row>
                        <Col xs="8">
                          <FormGroup>
                            <Label htmlFor="city">*Cidade</Label>
                            <Input type="text" id="city" required data-adp="customer-city" />
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label htmlFor="state">*Estado</Label>
                            <Input type="text" id="state" required data-adp="customer-state" />
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
                                <img src="https://www.zariff.com.br/media/catalog/product/cache/1/thumbnail/60x60/0dc2d03fe217f8c83829496872af24a0/4/b/4b9a9888.jpg" className="thumbnail-product" alt="Apontador 1 Furo com Depósito AP10" />
                              </div>

                              <p className="nome" title="Sapatênis Denim Democrata Joy Light">
                                Sapatênis Denim Democrata Joy Light
                              </p>
                            </div>
                          </td>
                          <td className="unity">1</td>
                          <td className="subtotal" data-adp="price">R$ 144,90</td>
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
                      <Button color="success" onClick={() => this.handleSubmit()} size="lg" block>Finalizar Compra</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default PaymentExpress;
