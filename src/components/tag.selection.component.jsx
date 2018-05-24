import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default (props) => (
    <div>
        <h3>Search</h3>
        <Dropdown placeholder='Tags' fluid multiple search selection options={
            props.tags.map((tag, index) => {
                return {
                    key: index,
                    value: tag.name,
                    text: tag.name
                }
            })
        }
        /></div>
)