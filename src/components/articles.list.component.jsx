import React from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react'

const COLORS = [
    'red'
    , 'orange'
    , 'yellow'
    , 'olive'
    , 'green'
    , 'teal'
    , 'blue'
    , 'violet'
    , 'purple'
    , 'pink'
    , 'brown'
    , 'grey'
    , 'black'
];

export default ({ articles }) => (
    <div className='cardsContainer'>
        {
            !articles.length ? <Label size="massive" color="olive">Nothing here!</Label> : articles.map(article => {
                return <Card className='mycard' key={article.title + article.link}>
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