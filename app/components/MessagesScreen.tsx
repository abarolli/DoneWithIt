import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "./ListItem";
import Screen from "./Screen";
import ListItemSeparator from "./ListItemSeparator";
import ListItemDeleteAction from "./ListItemDeleteAction";

function MessagesScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../../assets/mosh.jpg"),
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item: any) => {
    console.log("This item was deleted", item);
    setMessages(messages.filter((m) => m !== item));
  };

  return (
    <Screen style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={(
              progressAnimatedValue,
              dragAnimatedValue,
              swipeable
            ) => (
              <ListItemDeleteAction
                progressAnimatedValue={progressAnimatedValue}
                dragAnimatedValue={dragAnimatedValue}
                swipeable={swipeable}
                onPress={() => handleDelete(item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

export default MessagesScreen;
