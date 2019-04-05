import React, { Component } from 'react';

import {
    Jumbotron,
    Container,
    Row,
    Col,
} from 'reactstrap';

import HelloWorld from '../HelloWorld/HelloWorld';

class Page extends Component {
    render() {
        return (
            <>
                <Jumbotron>
                    <Container>
                        <h1>Hello World</h1>
                    </Container>
                </Jumbotron>
                <Container>
                    
                    <Row>
                        <Col>
                            <HelloWorld />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Page;
