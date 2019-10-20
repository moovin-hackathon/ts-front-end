import React, { Component } from 'react';
import axios from 'axios'
import { Badge, Card, CardBody, Col, Row, Table, Button } from 'reactstrap';
import './Announcement.scss'

class Create extends Component {

  state = {
    announcements: null,
    status: 'success'
  }
  removeAnnouncement = async () => {
    const { status } = this.state
    this.setState({ status: status === 'success' ? 'danger' : 'success' })
  }
  componentWillMount = async () => {
    const announcements = await axios.get('http://localhost:3333/camapaigns')

    this.setState({ announcements: announcements.data })
  }
  render() {
    const { announcements, status } = this.state
    console.log(new Date(announcements))
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nome do anúncio</th>
                      <th>Data de inicio</th>
                      <th>Data final</th>
                      <th>Status</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {announcements && announcements.map((announcement) => (
                      <tr>
                        <td>{announcement.name}</td>
                        <td>{announcement.date_start.split('T')[0]}</td>
                        <td>{announcement.date_end.split('T')[0]}</td>
                        <td>
                          <Badge color={status}>{status === "success" ? "ativo" : "inativo"}</Badge>
                        </td>
                        <td>
                          <Button type="reset" size="sm" onClick={this.removeAnnouncement} color={status === "success" ? "danger" : "success"}><i className="fa fa-ban"></i> {status === "success" ? "pausar" : "ativar"} </Button>
                        </td>
                      </tr>
                    ))
                    }

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div >
    );
  }
}

export default Create;
