import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            desk: 'Sports',
            section: 'World',
            type : 'News'
        }
    }

    handleChange = (event) => {

        this.setState({
            desk: event.target.value
        });
        this.sendFilterData()
    }

    handleSection = (event) => {

        this.setState({
            section: event.target.value
        });
        this.sendFilterData()
    }
    handleType = (event) => {

        this.setState({
            type: event.target.value
        });
        this.sendFilterData()
    }

    sendFilterData = () => {
        this.props.getFilterData(
            {
                desk: this.state.desk,
                section: this.state.section,
                type: this.state.type
            }
        )
    }

    render() {
        return (
            <div className='col'>
                <h4>Filter</h4>
                <div className='row'>
                    <div className='col'>News Desk
                     <div>
                            <select onChange={this.handleChange} onClick={this.sendFilterData} >
                                <option value="Sports">Sports</option>
                                <option value="Business">Business</option>
                                <option value="Well">Well</option>
                            </select>
                        </div>
                    </div>

                    <div className='col'>Section
                     <div>
                            <select onChange={this.handleSection} onClick={this.sendFilterData}>
                                <option value="World">World</option>
                                <option value="Opinion">Opinion</option>
                                <option value="Books">Books</option>
                            </select>
                        </div>
                    </div>

                    <div className='col'>Type
                     <div>
                            <select onChange={this.handleType} onClick={this.sendFilterData} >
                                <option value="News">News</option>
                                <option value="Letter">Letter</option>
                                <option value="Review">Review</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {/* <button onClick={}>Apply Filter</button> */}
                    </div>
                </div>
            </div>

        );
    }
}
