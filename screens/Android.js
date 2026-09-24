import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import data from '../data/data.json';
import Item from '../components/Item';

class Android extends React.Component{ 

    constructor(){
        super();
        this.state = {
            product: []
        }
    }

    componentDidMount(){
        this.setState({
            product: data
        });
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                    <View style={styles.productsContainer}>
                        <FlatList 
                            data={this.state.product.android}
                            renderItem = {({item}) => (
                                <Item item={item}/>
                            )}
                        />
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>View More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
           
        );
    }
       
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20
    },
    desc: {
        marginBottom: 20
    },
});

export default Android;