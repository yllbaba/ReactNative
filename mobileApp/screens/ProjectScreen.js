import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import {projects} from '../challange/project';

const ProjectScreen = () => {
    const renderProject = ({ item }) => (
        <View style={styles.projectCard}>
            <Image source={item.image} style={styles.projectImage}/>
            <View style={styles.projectBody}>
                <Text style={styles.projectName}>{item.name}</Text>
                <Text style={styles.projectCategory}>{item.category}</Text>
                <Text style={styles.projectDescription}>{item.description}</Text>
                <View style={styles.projectFooter}>
                    <Text style={styles.projectPrice}>${item.price}</Text>
                    <Text style={styles.projectStock}>{item.stock} in stock</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id}
                numColumns={2}
                nestedScrollEnabled
                scrollEnabled
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
                renderItem={renderProject}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    listContent: {
        paddingBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        gap: 14,
        marginBottom: 14,
    },
    projectCard: {
        flex: 1,
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
    projectImage: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
    },
    projectBody: {
        padding: 12,
    },
    projectName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#161616',
        marginBottom: 4,
    },
    projectCategory: {
        fontSize: 13,
        color: '#777',
        marginBottom: 8,
    },
    projectDescription: {
        fontSize: 13,
        color: '#444',
        marginBottom: 12,
        lineHeight: 18,
    },
    projectFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    projectPrice: {
        fontSize: 15,
        fontWeight: '700',
        color: '#111',
    },
    projectStock: {
        fontSize: 13,
        color: '#666',
    },
});

export default ProjectScreen;