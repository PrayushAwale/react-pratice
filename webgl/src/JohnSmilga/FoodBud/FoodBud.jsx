import { Box, Center, Text, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Alert from "./Alert";
import FoodLists from "./FoodLists";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return list;
  } else {
    return [];
  }
};
const FoodBud = () => {
  const [key, setKey] = useState(1);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const alertSet = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const emptyList = () => {
    setList([]);
    alertSet(true, "The list is cleared!", "#ff0000ab");
  };
  const deleteItem = (id) => {
    alertSet(true, "The item is deleted!", "#ff0000ab");
    setList(
      list.filter((item) => {
        return item.key !== id;
      })
    );
  };
  const editItems = (id) => {
    setIsEditing(true);
    setEditID(id);
    setName(list.find((item) => item.key === id).name);
    setList(
      list.filter((item) => {
        return item.key !== id;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <Center h={"100vh"} bg={"#fcf0e4"}>
      <Box
        bg={"#fffbf9"}
        p={"1rem 2rem"}
        borderRadius={"1rem"}
        boxShadow={" 0px 6px 28px -9px rgba(0,0,0,0.75)"}
      >
        {alert.show && <Alert {...alert} removeAlert={alertSet} list={list} />}
        <Text as={"h2"} textAlign={"center"}>
          FoodBud
        </Text>
        <form>
          <Input
            p={"0.5rem"}
            borderRadius={"0.5rem"}
            borderColor={"gray"}
            type="text"
            placeholder="e.g: egg attack"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button
            p={"0.5rem 0.7rem"}
            ml={"0.5rem"}
            bg={"#ffe3c8"}
            border={"none"}
            borderRadius="0.5rem"
            cursor={"pointer"}
            onClick={() => {
              if (!name) {
                alertSet(true, "Empty Value Entered!", "#ff0000ab");
              } else if (name && isEditing) {
                setIsEditing(false);
                setList([...list, { name, key: editID }]);
                setName("");
                alertSet(true, "Edited the list", "#00ff2286");
              } else {
                setList([...list, { name, key }]);
                setKey((prev) => prev + 1);
                setName("");
                alertSet(true, "Food Added", "#00ff2286");
              }
            }}
          >
            {isEditing ? "Edit" : "Add"}
          </Button>
        </form>
        {list.length > 0 && (
          <>
            <FoodLists
              list={list}
              deleteItem={deleteItem}
              editItems={editItems}
            />
            <Button
              color={"red "}
              p={"0.3rem 0.5rem"}
              ml={"0.5rem"}
              mt={"0.8rem"}
              bg={"#ff19192b"}
              border={"none"}
              borderRadius="0.5rem"
              cursor={"pointer"}
              onClick={emptyList}
            >
              Clear Items
            </Button>
          </>
        )}
      </Box>
    </Center>
  );
};

export default FoodBud;
