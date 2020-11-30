import React, { useEffect } from "react";
import ChatInput from "../ChatInput";
import ChatBody from "../ChatBody";
import "./chatSection.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import openSocket from "socket.io-client";
import ChatHeader from "../ChatHeader";

let socket;

const ChatSection = () => {
  const API_URL = "http://192.168.0.125:8082/";
  const dispatch = useDispatch();
  const { newMessage } = useSelector((state) => state.chat);

  const onChangeNewMessage = (val) => {
    dispatch({
      type: "SET_STATE",
      payload: { newMessage: val },
    });
  };

  const sendNewMessage = async () => {
    try {
      const response = await axios.post(`${API_URL}message`, {
        message: newMessage,
        from: localStorage.getItem("username"),
      });
      if (!response || response.status !== 201)
        return dispatch({ type: "SET_STATE", error: "error occured !" });
      socket.emit("new_message", response.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    socket = openSocket(API_URL);
  }, []);

  useEffect(() => {
    socket.on("new_message", (data) => {
      dispatch({
        type: "ADD_NEW",
        payload: data,
      });
    });
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_STATE", payload: { loading: true } });
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}message`);

        if (!response || response.status !== 200)
          return dispatch({
            type: "SET_STATE",
            payload: {
              messages: [],
            },
          });
        dispatch({
          type: "SET_STATE",
          payload: {
            messages: response.data.data,
            loading: false,
          },
        });
      } catch (err) {
        console.log(err.message);
        return dispatch({
          type: "SET_STATE",
          payload: {
            messages: [],
          },
        });
      }
    };
    fetchData();
  }, []);
  const { messages, loading } = useSelector((state) => state.chat);
  return (
    <div className="chat-section-container">
      {loading ? null : (
        <>
          <ChatHeader />
          <ChatBody data={messages} />
          <ChatInput
            sendNewMessage={sendNewMessage}
            onChangeNewMessage={onChangeNewMessage}
          />
        </>
      )}
    </div>
  );
};

export default ChatSection;
