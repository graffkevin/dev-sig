import React from 'react';
import TemplateHome from './child-home/TemplateHome'
import { itemsEvent } from '../../content/db/itemsEvent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

function Home() {

    return (
        <motion.div
            initial = {{opacity: 0}}
            animate = {{opacity: 1, transition: { duration: 0.5 }}}
            exit = {{opacity: 0}}
        >
            <Container  fluid="md">
                <Row  xs="auto" md={2}>
                    {itemsEvent.map( ({ id, image, path }) => 
                        (
                            <Col key = {id} sm="auto"> 
                                <TemplateHome
                                        id = {id}
                                        image = {image}
                                        path = {path}
                                >
                                </TemplateHome>
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </motion.div>

    )
};

export default Home;
