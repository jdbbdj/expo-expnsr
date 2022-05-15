import { View, SafeAreaView, Text, FlatList, ScrollView } from "react-native";
import Greeter from "./components/greeter";
import React from "react";
import styles from "./styles";
import CustomInput from "../../components/CustomInput";
import Spacer from "../../components/Spacer";
import Categories from "./components/categories";
import Carousel from "../../components/Carousel";
import Transaction from "./components/transaction";
import { values } from "../../utils/constants";
import { categories, transactions } from "../../utils/data";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.horizontalPaddingView}>
        <View style={{ paddingLeft: values.horizontalPadding }}>
          <Greeter
            user={{
              name: "James",
              img: "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
            }}
          />
          <Spacer height={20} />
          <CustomInput placeholder="Search" icon="search-outline" />
          <Spacer height={20} />
          <Text style={values.h2Style}>Categories</Text>
          <Spacer height={20} />
        </View>
        <View style={{ paddingLeft: values.horizontalPadding - 5 }}>
          <FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Categories
                categories={item}
                handlePress={(val) => console.warn(`Clicked ${val}`)}
              />
            )}
          />
        </View>

        <View style={{ paddingLeft: 0 }}>
          <Spacer height={20} />
          <Carousel />
        </View>
        <View style={styles.horizontalPaddingView}>
          <Spacer height={20} />
          <Text style={values.h2Style}>Transactions History</Text>
          <Spacer height={20} />

          {transactions.map((item, index) => (
            <Transaction
              transaction={item}
              onPress={(val) => console.warn(`Clicked ${val}`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
