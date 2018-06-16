import React, {Component} from 'react';
import ImagePage from "./imagePage";
import Sections from "./sections";

import { searchStores } from "../../utils/communication-manager";

var googleMapsClient = require('@google/maps').createClient({
    key: "AIzaSyCVXeSVaumr1q5nzcwHd0FPfzLsZZRDKX8",
    Promise: Promise

});

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderSections: true,
            shopList: []
        }
    }
    handleSearch = (data) => {
        let currentLocation = null
        googleMapsClient.geocode({address: data.location})
        .asPromise()
        .then((response) => {
            //console.log(response.json.results);
            currentLocation = {
                latidude: response.json.results[0].geometry.location.lat,
                longitude: response.json.results[0].geometry.location.lng
            }
            console.log(currentLocation); 
            searchStores(currentLocation, data.shopType)
            .then(suc => {
                //console.log(suc);
                this.setState({
                    renderSections: true,
                    shopList: suc.message
                });
            })
            .catch(err => {
                console.log(err);
            });  
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <ImagePage onSearchClick={this.handleSearch}/>
                <Sections render={this.state.renderSections} shopList={this.state.shopList}/>
            </div>
        );
    }
}

export default (MainPage);
