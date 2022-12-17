import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import "./table.css"

const Tables = () => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className='shadow'>
              <Table className='align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>&nbsp;&nbsp;&nbsp;Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>hardikmistry</td>
                    <td>hardik@email.com</td>
                    <td>M</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                          <Badge bg="primary">
                            Active <i class="fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >Active</Dropdown.Item>
                          <Dropdown.Item>InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src="/man.png" alt="" />
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >
                            <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>hardikmistry</td>
                    <td>hardik@email.com</td>
                    <td>M</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                          <Badge bg="primary">
                            Active <i class="fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >Active</Dropdown.Item>
                          <Dropdown.Item>InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src="/man.png" alt="" />
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                          <i class="fa-solid fa-ellipsis-vertical dots"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >
                            <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Tables