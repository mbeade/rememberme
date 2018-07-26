import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createArticle } from '../redux/articles/articlesActionCreator';
import TagSelection from '../components/tag.selection.component';
import ImageUploader from './image.uploader.component';

class CreateArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            link: '',
            title: '',
            description: '',
            dateCreated: '',
            image: ''
        }
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitHandler(event) {
        this.setState({ ...this.state, dateCreated: new Date() });
        console.log(this.state);

        this.props.createArticle(this.state, this.props.nextAricleIndex);
        this.setState({
            tags: [],
            link: '',
            title: '',
            description: '',
            dateCreated: '',
            image: ''
        });
    }

    onItemAddedHandler(event, data) {
        console.log(data.value);
        this.setState({ ...this.state, tags: data.value });
    }

    render() {
        return <div>
            <h3>Add a new Article</h3>

            <Form onSubmit={this.onSubmitHandler.bind(this)}>

                <Form.Field>
                    <label>Title</label>
                    <input name="title" value={this.state.title} onChange={this.onInputChange.bind(this)} placeholder='Enter title' />
                </Form.Field>

                <Form.Field>
                    <label>What is this about?</label>
                    <input name="description" value={this.state.description} onChange={this.onInputChange.bind(this)} placeholder='Enter description' />
                </Form.Field>

                <Form.Field>
                    <label>Article URL</label>
                    <input name="link" value={this.state.link} onChange={this.onInputChange.bind(this)} placeholder='Enter link' />
                </Form.Field>
                <div className="ui divider"></div>
                <Form.Field>
                    <ImageUploader></ImageUploader>
                </Form.Field>
                <div className="ui divider"></div>
                <Form.Field>
                    <label>Tags</label>
                    <TagSelection onItemAdded={this.onItemAddedHandler.bind(this)} tags={this.props.tagsList} placeholder="Select your tags"></TagSelection>
                </Form.Field>

                <Button basic type='submit' color='teal'>Save Article</Button>
            </Form>
        </div>
    }
}

// Redux setup
const mapStateToProps = (state) =>
    ({
        articles: state.articles.articles,
        nextAricleIndex: state.articles.index
    });

const mapDispatchToProps = (dispatch) =>
    ({
        createArticle: (article, nextKey) => {
            dispatch(createArticle(article, nextKey));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);