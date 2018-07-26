
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { getAllTags } from '../redux/tags/tagsActionCreator';
import { getAllArticles } from '../redux/articles/articlesActionCreator';
import TagSelection from '../components/tag.selection.component';
import CreateTag from './tag.create.component';
import ArticlesList from '../components/articles.list.component';
import CreateArticle from './article.create.component';
import '../styles.css';
import { Container } from 'semantic-ui-react'
import firebase from "firebase";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }

        // Anonymous auith
        firebase.auth().signInAnonymously().catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    arrayContainsAnotherArray(needle, haystack) {
        for (var i = 0; i < needle.length; i++) {
            if (haystack.indexOf(needle[i]) === -1)
                return false;
        }
        return true;
    }


    onItemAddedHandler(event, data) {
        console.log(data.value);
        let result = this.props.articles.filter((a) => { return this.arrayContainsAnotherArray(data.value, a.tags) });
        this.setState({
            articles: result
        });
    }

    render() {
        return <div>

            <Container style={ContainerStyles}>
                <TagSelection tags={this.props.tagsList} onItemAdded={this.onItemAddedHandler.bind(this)} placeholder="Search using tags!"></TagSelection>
                <div className="ui divider"></div>
                <ArticlesList articles={this.state.articles} />
                <div className="ui divider"></div>
                <CreateTag />
                <div className="ui divider"></div>
                <CreateArticle tagsList={this.props.tagsList} />
            </Container>
        </div>
    }

    componentWillMount() {
        this.props.getAllTags();
        this.props.getAllArticles();
    }
}

// Styles
const ContainerStyles = {
    margin: '100px'

}

const TagSelectionStyles = {
    width: '500px'
}

// Redux setup

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
        getAllArticles: () => {
            dispatch(getAllArticles());
        },
    });

export default connect(mapStateToProps, mapDispatchToProps)(App);

