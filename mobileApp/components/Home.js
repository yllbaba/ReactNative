import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import products from "../data/product.json";

const Icon = ({ name, iconText }) => (
  <View style={styles.iconItem}>
    <MaterialCommunityIcons name={name} size={26} color="#333" />
    <Text style={styles.iconText}>{iconText}</Text>
  </View>
);

const Item = ({ item }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <Text style={styles.productName}>{item.name}</Text>
    <Text style={styles.productPrice}>${item.price}</Text>
  </View>
);

class Home extends Component {
  state = {
    products: {
      popularproducts: products.slice(0, 4),
    },
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => this.props.navigation?.navigate("Ios")}>
              <Icon name="cellphone" iconText="IOS" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation?.navigate("Android")}>
              <Icon name="android" iconText="Android" />
            </TouchableOpacity>

            <Icon name="laptop" iconText="Laptop" />
          </View>

          <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet" />
            <Icon name="mouse" iconText="Mouse" />
            <Icon name="keyboard" iconText="Keyboard" />
          </View>

          <View style={styles.productsContainer}>
            <Text style={styles.title}>Most popular products</Text>

            <FlatList
              data={this.state.products.popularproducts}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
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
  scrollContent: {
    paddingVertical: 16,
  },
  container: {
    paddingHorizontal: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  iconItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
  },
  iconText: {
    marginTop: 8,
    fontSize: 12,
    color: "#333",
  },
  productsContainer: {
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 12,
    color: "#222",
  },
  productPrice: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
    marginHorizontal: 12,
  },
  btn: {
    backgroundColor: "#1e88e5",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Home;
