
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import { Counter } from '../components/counter';
import { connect } from 'react-redux';
import { getAllTags, createTag } from '../actions/tagsActionCreator';

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
        createTag: (name, nextKey) => {
            dispatch(createTag(name, nextKey));
        }
    });

class App extends React.Component {

    constructor(props) {
        super(props);
        this.createTag = this.createTag.bind(this);
    }

    createTag() {
        this.props.createTag(`Nuevo Tag ${Math.random()}`, this.props.nextTagKey);
    }

    render() {
        return <div><ul>{
            this.props.tagsList.map(tag => {
                return <li>  {tag.name} </li>
            })
        }
        </ul>
            <button onClick={this.createTag}>Create</button>
        </div>
    }

    componentWillMount() {
        this.props.getAllTags();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

