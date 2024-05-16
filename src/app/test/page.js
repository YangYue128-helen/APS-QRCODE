"use client";
import { useEffect, useState, useRef } from "react";
import mqtt from "mqtt";
function page() {
  const [messages, setMessages] = useState([]);
  const mqttUri = "ws://47.236.10.165:30885/mqtt";
  const options = {};
  const clientRef = useRef(null);
  const topic = "asset/asset1";
  useEffect(() => {
    // access client vis clientRef.current
    console.dir(clientRef.current);
    // if (clientRef.current) {
    console.log(`client: ${clientRef.current}`);
    clientRef.current = mqtt.connect(mqttUri);
    clientRef.current.subscribe(topic);
    clientRef.current.on("message", (topic, payload) => {
      setMessages([...messages, payload.toString()]);
    });
    // }

    return () => {
      // always clean up the effect if clientRef.current has a value
      if (clientRef.current) {
        clientRef.current.unsubscribe(topic);
        clientRef.current.end(clientRef.current);
      }
    };
  });
  console.log(clientRef.current);

  //   useEffect(() => {
  //     const client = mqtt.connect(mqttUri);
  //     client.subscribe("asset/asset1");
  //     client.on("message", (topic, payload) => {
  //       console.log(topic, payload);
  //       setMessages(messages.concat(payload.toString()));
  //     });

  //     return () => {
  //       if (client) {
  //         client.unsubscribe("asset/asset1");
  //         client.end(client);
  //       }
  //     };
  //   }, []);
  const addMessage = () => {
    const newMessges = messages.concat(Math.random());
    setMessages(newMessges);
  };
  const publishMessages = (client) => {
    if (!client) {
      console.log("(publishMessages) Cannot publish, mqttClient: ", client);
      return;
    }

    client.publish("asset/asset1", "1st message from component");
  };
  return (
    <div>
      <p>Subscribed topic: {topic}</p>
      <button onClick={() => publishMessages(clientRef.current)}>
        addMessage
      </button>
      <h2>Received Messages: </h2>
      <ul>
        {messages.map((message) => (
          <li key={Math.random()}>{message.toString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default page;
