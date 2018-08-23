import React from 'react'
import { Form, Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createArticle } from '../redux/articles/articlesActionCreator';
import TagSelection from '../components/tag.selection.component';

class CreateArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            link: '',
            title: '',
            description: '',
            dateCreated: '',
            imageFileName: ''
        }
    }

    onInputChange(event) {
        const { target } = event;
        if (target.name === 'imageFileName') {
            console.log('event ->', target.files[0]);
            this.setState({
                [target.name]: target.files[0].name
            });
        } else {
            this.setState({
                [target.name]: target.value
            });
        }
    }

    onSubmitHandler(event) {
        this.setState({ ...this.state, dateCreated: new Date() });
        console.log(this.state);

        this.props.createArticle(this.state, this.props.nextAricleIndex);

        // Save image in storage if loaded

        this.clearState();
    }

    clearState() {
        this.setState({
            tags: [],
            link: '',
            title: '',
            description: '',
            dateCreated: '',
            imageFileName: ''
        });
    }

    onItemAddedHandler(event, data) {
        console.log(data.value);
        this.setState({ ...this.state, tags: data.value });
    }

    render() {
        return <div>
            <h3>Add a new Article</h3>
            <Segment inverted>
                <Form onSubmit={this.onSubmitHandler.bind(this)}>

                    <Form.Field>
                        <label>Title</label>
                        <input name="title" value={this.state.title} onChange={this.onInputChange.bind(this)} placeholder='Enter title' />
                    </Form.Field>

                    <Form.Field>
                        <label>What is this about?</label>
                        <input name="description"
                            value={this.state.description}
                            onChange={this.onInputChange.bind(this)}
                            placeholder='Enter description' />
                    </Form.Field>

                    <Form.Field>
                        <label>Article URL</label>
                        <input name="link" value={this.state.link} onChange={this.onInputChange.bind(this)} placeholder='Enter link' />
                    </Form.Field>
                    <div className="ui divider"></div>


                    <Form.Field>
                        <label htmlFor="file"
                            className="ui teal basic button ">
                            <i className="file icon"></i>
                            {this.state.imageFileName || 'Select your image'}
                        </label>
                        <input
                            style={{ display: 'none' }}
                            name="imageFileName"
                            id="file"
                            type="file"
                            onChange={this.onInputChange.bind(this)}
                        />
                    </Form.Field>


                    <div className="ui divider"></div>
                    <Form.Field>
                        <label>Tags</label>
                        <TagSelection onItemAdded={this.onItemAddedHandler.bind(this)} tags={this.props.tagsList} placeholder="Select your tags"></TagSelection>
                    </Form.Field>

                    <Button basic type='submit' color='teal'>Save Article</Button>


                </Form>
            </Segment>
        </div>
    }
}

// Redux setup
const mapStateToProps = (state) =>
    ({
        articles: state.articles.articles,
        nextAricleIndex: state.articles.index
    });


export default connect(mapStateToProps, { createArticle })(CreateArticle);