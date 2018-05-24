
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { getAllTags } from '../redux/tags/tagsActionCreator';
import { getAllArticles } from '../redux/articles/articlesActionCreator';
import TagSelection from '../components/tag.selection.component';
import CreateTag from './tag.create.component';
import ArticlesList from '../components/articles.list.component';

class App extends React.Component {

    render() {
        return <div>

            <TagSelection tags={this.props.tagsList}></TagSelection>

            <ArticlesList articles={this.props.articles} />

            <CreateTag />

        </div>
    }

    componentWillMount() {
        this.props.getAllTags();
        this.props.getAllArticles();
    }
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

