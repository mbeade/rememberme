import React from 'react'
import { Form, Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createTag } from '../redux/tags/tagsActionCreator';
import { COLORS } from '../constants/constants'
class CreateTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            purpose: '',
            color: ''
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
            <h3>Create new Tags</h3>
            <Segment inverted>
                <Form inverted onSubmit={this.onSubmitHandler.bind(this)}>
                    <Form.Field>
                        <label>Tag name</label>
                        <input name="name" value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder='Enter tag name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Purpose of this</label>
                        <input name="purpose" value={this.state.purpose} onChange={this.onInputChange.bind(this)} placeholder='Enter purpose of this' />
                    </Form.Field>
                    <Form.Field>
                        <label>Color</label>
                        <input name="color" value={this.state.color} onChange={this.onInputChange.bind(this)} placeholder={COLORS.join(', ')} />
                    </Form.Field>
                    <Button basic type='submit' color='orange'>Save Tag</Button>
                </Form>
            </Segment>
        </div>
    }
}

// Redux setup
const mapStateToProps = (state) =>
    ({
        nextTagKey: state.tags.index
    });

export default connect(mapStateToProps, { createTag })(CreateTag);