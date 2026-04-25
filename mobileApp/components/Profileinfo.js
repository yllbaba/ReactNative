import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ProfileInfo = (props) => {
    const { fullName, position, description, profileImg, projects, images } = props;

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={profileImg} style={styles.profileImg} />
                <View style={styles.headerInfo}>
                    <Text style={styles.fullName}>{fullName}</Text>
                    <Text style={styles.position}>{position}</Text>
                </View>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.sectionTitle}>Projects:</Text>
            <FlatList
                data={projects}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.projectItem}>
                        <Image source={item.img} style={styles.projectImg} />
                        <Text style={styles.projectName}>{item.name}</Text>
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.sectionTitle}>Images:</Text>
            <FlatList
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={item} style={styles.imageItem} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ff0404"
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    position: {
        fontSize: 18,
        color: '#666',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 24,
    },
    studentWrapper: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    projectItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    projectImg: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginBottom: 5,
    },
    projectName: {
        fontSize: 14,
        textAlign: 'center',
    },
    imageItem: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
});

export default ProfileInfo;