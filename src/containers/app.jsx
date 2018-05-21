
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import { Counter } from '../components/counter';
import { connect } from 'react-redux';
import { getAllTags, createTag } from '../redux/tags/tagsActionCreator';
import { getAllArticles } from '../redux/articles/articlesActionCreator';

const mapStateToProps = (state) =>
    ({
        tagsList: state.tags.tags,
        nextTagKey: state.tags.index,
        articles: state.articles.articles
    });

const mapDispatchToProps = (dispatch) =>
    ({
        getAllTags: () => {
            dispatch(getAllTags());
        },
        createTag: (name, nextKey) => {
            dispatch(createTag(name, nextKey));
        },
        getAllArticles: () => {
            dispatch(getAllArticles());
        },
    });

class App extends React.Component {

    constructor(props) {
        super(props);
        this.createTag = this.createTag.bind(this);
    }

    createTag() {
        this.props.createTag(this.state.tagName, this.props.nextTagKey);
    }

    setNameHandler(event) {
        this.setState({
            tagName: event.target.value
        });
    }

    render() {
        return <div>
            <h3>Articles</h3>
            <ul>{
                this.props.articles.map(tag => {
                    return <li><b> {tag.link}</b><small>  {tag.description}</small> </li>
                })
            }
            </ul>

            <h3>Tags</h3>
            <ul>{
                this.props.tagsList.map(tag => {
                    return <li>  {tag.name} </li>
                })
            }
            </ul>

            <input type="text" onChange={this.setNameHandler.bind(this)} placeholder="Name" />
            <button onClick={this.createTag}>Create</button>
        </div>
    }

    componentWillMount() {
        this.props.getAllTags();
        this.props.getAllArticles();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

