var conn = new WebSocket('ws://localhost:8080/socket');
function send(message) {
      conn.send(JSON.stringify(message));
}
conn.onopen = function() {
      send("hihihi");
};
// conn.onmessage = function(event) {
//       console.log('Message from server:', event.data);
// };
// conn.onerror = function(error) {
//       console.error('WebSocket error:', error);
// };
// conn.onclose = function() {
//       console.log('WebSocket connection closed');
// };
