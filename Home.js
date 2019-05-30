import React from 'react';
import { StyleSheet, Text, View, Button, Rich } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants } from './RestaurantActions';
import { TextInput } from 'react-native-gesture-handler';

class Home extends React.Component {

    render() {
        let text;
        if (this.props.response !== undefined) {
            let j_obj = JSON.stringify(this.props.response.data)
            text = <View>
                <TextInput editable={true} multiline={true} numberOfLines={20} value={j_obj}></TextInput>
            </View>
        }
        else {
            text = <Text>Response Data</Text>
        }
        return (
            <View style={styles.container}>
                <Button
                    title="Click Me"
                    onPress={() =>
                        this.props.fetchRestaurants('39.999734144579,116.33970166089', '10,35', 20)
                    } />
                <View>
                    {
                        this.props.isFetching && <Text>Loading...</Text>
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
    const model = state.restaurants;
    return model;
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchRestaurants
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
