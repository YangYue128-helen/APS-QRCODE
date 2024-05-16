"use client";
import { useRef, useState } from "react";
import useMqtt from "@/lib/useMqtt";

export default function Home() {
  const [incommingMessages, setIncommingMessages] = useState([]);
  const incommingMessageHandlers = useRef([
    {
      topic: "asset/asset1",
      handler: (message) => {
        console.log(message);
        addMessage(message);
      },
    },
  ]);
  const addMessage = (message) => {
    setIncommingMessages((incommingMessages) => [
      ...incommingMessages,
      message,
    ]);
  };
  useMqtt({
    uri: "ws://47.236.10.165:30885/mqtt",
    options: {
      // username: process.env.NEXT_PUBLIC_MQTT_USERNAME,
      // password: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
      clientId: "client1",
    },
    topicHandlers: incommingMessageHandlers.current,
    onConnectedHandler: (client) => setMqttClient(client),
  });
  const mqttClientRef = useRef(null);
  console.log(mqttClientRef.current, mqttClientRef.current?.connected);

  const setMqttClient = (client) => {
    console.log("connected");
    mqttClientRef.current = client;
    console.log(client, client.connected);
  };
  const clearMessages = () => {
    setIncommingMessages(() => []);
  };
  const publishMessages = (client) => {
    if (!client) {
      console.log("(publishMessages) Cannot publish, mqttClient: ", client);
      return;
    }
    console.log(client.connected);
    client.publish("asset/asset1", "1st message from component");
  };

  return (
    <div>
      <h2>Subscribed Topics</h2>
      {incommingMessageHandlers.current.map((i) => (
        <p key={Math.random()}>{i.topic}</p>
      ))}
      <h2>Incomming Messages:</h2>
      {incommingMessages.map((m) => (
        <p key={Math.random()}>
          {m.topic} {JSON.stringify(m.payload)}
        </p>
      ))}
      <button
        onClick={() => {
          console.log(mqttClientRef.current.connected);
          publishMessages(mqttClientRef.current);
        }}
      >
        Publish Test Messages
      </button>
      <button onClick={() => clearMessages()}>Clear Test Messages</button>
    </div>
  );
}
