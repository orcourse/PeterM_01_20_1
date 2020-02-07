/* var addButton = document.getElementById("add");
addButton.className = "add";
addButton.addEventListener('click', function(){
    var condModel = new Conditioner("LG", 0);
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.renderConditioner();
}); */
var condModel = new Conditioner("LG", 0);
var viewCondModel = new ViewConditioner(condModel, document.getElementById("term_block"));
viewCondModel.renderConditioner();

var cameraSonny = new Camera("Sonny");
var viewCameraSonny = new ViewCamera(cameraSonny, document.getElementById("video_block"));
viewCameraSonny.renderCamera();

var signalingBoschWindow = new Signaling("Bosch", 0);
var viewSignalingBoschWindow = new ViewSignaling(signalingBoschWindow, document.getElementById("signal_block_window"));
viewSignalingBoschWindow.renderSignaling();

var signalingBosch = new Signaling("Bosch");
var viewSignalingBosch = new ViewSignaling(signalingBosch, document.getElementById("signal_block"));
viewSignalingBosch.renderSignalingTwo();


