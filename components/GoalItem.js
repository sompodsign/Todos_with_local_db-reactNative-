import React from "react";
import { FlatList, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const GoalItem = ({ items, deleteItem }) => {
  return (

      <FlatList
        keyExtractor={(item) => item._id.toString()}
        data={items}
        renderItem={({ item }) => (
          <Card
            mode="outlined"
            style={{ backgroundColor: "#293B5F" }}
          >

            <Card.Title
              style={{ color: "green" }}
              onPress={deleteItem}
              title={item.title}
              titleStyle={{ color: "white" }}
              subtitle={`${item.date}/0${item.month}/${item.year}`}
              subtitleStyle={{ color: "#EEEEEE" }}
              left={(props) => <Avatar.Icon color="#B2AB8C" style={{ backgroundColor: "#47597E" }} {...props}
                                            icon="calendar-check" />}
              right={(props) => (
                <IconButton {...props} color="#B2AB8C" icon="check" onPress={() => deleteItem(item._id)} />
              )}
            />

          </Card>

        )}
      />

  );
};



export default GoalItem;


