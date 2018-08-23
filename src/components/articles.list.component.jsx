import React from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import { COLORS } from '../constants/constants'

export default ({ articles, cardSelectedAction }) => (
    <div className='cardsContainer'>
        {
            !articles.length ? <Label size="massive" color="olive">Nothing here!</Label> : articles.map(article => {
                return <Card className='mycard' key={article.title + article.link} onClick={cardSelectedAction.bind(this,article.link)}>
                    <Image src={article.image} />
                    <Card.Content >
                        <Card.Header>
                            {article.title}
                        </Card.Header>
                        <Card.Meta>
                            <span className='date'>
                                {article.dateCreated}
                            </span>
                        </Card.Meta>
                        <Card.Description>
                            {article.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            {
                                article.tags.map((element, index) => {
                                    return <Label key={index} as='a' color={COLORS[Math.floor(Math.random() * COLORS.length)]} tag>{element}</Label>
                                })
                            }
                        </div>
                    </Card.Content>
                </Card >
            })
        }
    </div>
)