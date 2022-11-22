import Kafka from "node-rdkafka";
import eventType from "./eventType.js";
import { createVoice } from "./services/voice.js";

var consumer = new Kafka.KafkaConsumer(
  {
    "group.id": "kafka",
    "metadata.broker.list": "kafka-service",
  },
  {}
);

consumer.connect();

consumer
  .on("ready", () => {
    console.log("consumer ready..");
    consumer.subscribe(["test-topic"]);
    consumer.consume();
  })
  .on("data", async function (data) {
    try {
      await createVoice({ ...(eventType.fromBuffer(data.value) || {}) });
      console.log(`received message: ${eventType.fromBuffer(data.value)}`);
    } catch (error) {
      console.log("error", error);
    }
  });
