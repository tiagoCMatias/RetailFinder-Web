import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import "../styles/sections.css"
import Button from '@material-ui/core/Button';

import flowerImage from "../../img/flower.jpg";

import StarRatingComponent from 'react-star-rating-component';
import { CardActions } from '@material-ui/core';


class Section extends Component {

    constructor(props){
        super(props);
        this.state = {
            renderSections: true,
            shopList: [],
            rating: []
        }
    }   

    shouldComponentUpdate(nextProps, nextState){
        
        if(this.props.shopList !== nextProps.shopList){
            console.log(nextProps.shopList.length);
            this.setState({ rating: [nextProps.shopList.length]})
            return true;
        }
        
        return false;
    }
    
    onStarClick(value, index) {
        console.log(value, index);
        let rating = Object.assign(this.state.rating); // Pull the entire items object out. Using object.assign is a good idea for objects.
        rating[index] = value; // update the items object as needed
        this.setState({ rating }); // Put back in state
    }

    render() {
        const { render, shopList } = this.props;
        const { rating } = this.state;

        return (
            <div >
            {
                render === true 
                && 
                <Grid container spacing={24} >
                    {shopList.map((shop, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                            <Card className="card sectionGrid">
                                <div className="details">
                                    <CardContent className="content">
                                        <Typography variant="headline">{shop.cliente}</Typography>
                                        <Typography variant="subheading" color="textSecondary">
                                        {shop.address}
                                        </Typography>
                                        <div className="control star">
                                            <StarRatingComponent 
                                                name="rate1" 
                                                starCount={5}
                                                value={rating[index]}
                                                onStarClick={this.onStarClick.bind(this, index)}
                                            />
                                            <h5 className="star">Rating: {rating[index]}</h5>
                                            <CardMedia>
                                                <img src={flowerImage} alt="flower"/>
                                            </CardMedia>
                                        </div>
                                    </CardContent>                                    
                                </div>
                                
                                <CardActions className="actions">
                                    <Button size="small" color="primary">Learn More</Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            }
            </div>
        );
    }
}

export default Section;
