import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {createTag } from '../redux/tags/tagsActionCreator';

class CreateTag extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            purpose: ''
        }
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitHandler(event) {
        console.log(this.state);
        this.props.createTag(this.state, this.props.nextTagKey);
        this.setState({
            name: '',
            purpose: ''
        });
    }

    render() {
        return <div>
            <h3>Add Tags</h3>
            <Form onSubmit={this.onSubmitHandler.bind(this)}>
                <Form.Field>
                    <label>Tag name</label>
                    <input name="name" value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder='Enter tag name' />
                </Form.Field>
                <Form.Field>
                    <label>Purpose</label>
                    <input name="purpose" value={this.state.purpose} onChange={this.onInputChange.bind(this)} placeholder='Enter purpose of this' />
                </Form.Field>
                <Button primary type='submit'>Submit</Button>
            </Form>
        </div>
    }
}

// Redux setup
const mapStateToProps = (state) =>
    ({
        tagsList: state.tags.tags,
        nextTagKey: state.tags.index
    });

const mapDispatchToProps = (dispatch) =>
    ({
        getAllTags: () => {
            dispatch(getAllTags());
        },
        createTag: (tag, nextKey) => {
            dispatch(createTag(tag, nextKey));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(CreateTag);