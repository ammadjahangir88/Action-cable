import consumer from "./consumer"

consumer.subscriptions.create({channel: "RoomChannel", 
room_id:1 }, {
  connected() {
    console.log("Connected to Room Chaennel... ")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log("DisConnected to Room Channel...")
    // Called when the subscription has been terminated by the server
  },

  received(data) {

    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});
