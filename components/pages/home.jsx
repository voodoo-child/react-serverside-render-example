import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import SearchBox from 'components/controls/searchbox.jsx'

export default class Home extends Component {

    render(){

        return (
            <div className="home-page">
                <SearchBox />
                <h1>This is page was rendered with react.</h1>
            </div>
        )

    }
}
