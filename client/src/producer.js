import Kafka from "node-rdkafka";
import eventType from "./eventType.js";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "kafka-service",
  },
  {},
  {
    topic: "test-topic",
  }
);

stream.on("error", (err) => {
  console.error("Error in our kafka stream");
  console.error(err);
});

export function queueRandomMessage(body) {
  const event = { ...body };
  const success = stream.write(eventType.toBuffer(event));
  if (success) {
    console.log(`message queued (${JSON.stringify(event)})`);
  } else {
    console.log("Too many messages in the queue already..");
  }
}
