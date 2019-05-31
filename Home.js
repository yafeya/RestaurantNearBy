import React from 'react';
import { StyleSheet, Text, View, Button, Rich } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants, pickRestaurant } from './RestaurantActions';

class Home extends React.Component {

    Title = "Hello";

    getLocation() {
        var geolocation = navigator.geolocation;
        geolocation.getCurrentPosition((location) => { 
            j_str = JSON.stringify(location.coords);
            alert(j_str);  
        });
    }

    _onClickGetLocation(e) { 
        this.getLocation();
    }

    render() {
        let text;
        if (this.props.restaurants != null
            && this.props.restaurants.candidates != null
            && this.props.restaurants.candidates.length > 0) {
            let randomNumber = Math.round(Math.random() * 20);
            let selected = this.props.restaurants.candidates[randomNumber];
            text =
                <View>
                    <Text>{selected.name}</Text>
                </View>
        }
        return (
            <View style={styles.container}>
                <Button title="Get Location" 
                    onPress={e=>this._onClickGetLocation(e)}
                />
                {
                    !this.props.restaurants.isFetching && <Button
                        title="Click Me"
                        onPress={() =>
                            this.props.fetchRestaurants('39.999734144579,116.33970166089', '10,35', 20)
                        } />
                }
                <View>
                    {
                        this.props.restaurants.isFetching && <Text>Loading...</Text>
                    }
                </View>
                {text}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    const { restaurants } = state;
    return { restaurants };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchRestaurants,
        pickRestaurant
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
