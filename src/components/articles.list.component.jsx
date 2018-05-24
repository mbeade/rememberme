import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default ({ articles }) => (
    articles.map(article => {
        return <Card>
            <Image src={article.image} />
            <Card.Content>
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
                <a>
                    <Icon name='user' />
                    22 Friends
                  </a>
            </Card.Content>
        </Card >
    })
)