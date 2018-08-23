import React from 'react'
import { Dropdown, Segment } from 'semantic-ui-react'

export default (props) => (
    <Segment inverted>
        <Dropdown inverted style={TagSelectionStyles} placeholder={props.placeholder} multiple search selection options={
            props.tags.map((tag, index) => {
                return {
                    key: index,
                    value: tag.name,
                    text: tag.name,
                    label: { color: tag.color },
                }
            })
        }
            onChange={props.onItemAdded} />

    </Segment>
)

// Styles
const TagSelectionStyles = {
    width: '100%'
}
