function ViewCamera(camera, videoAdd) {
    this._camera = camera;
    this._videoAdd = videoAdd;
    this._state = document.createElement("i"); /// почему state
    this._state.className = "fas fa-circle";
    this._state.style.margin = "12px";
    this._typeCamera = document.createElement("span");
    this._typeCamera.className = "type_camera";
    this._modeCamera = document.createElement("span");
    this._modeCamera.className = "mode_camera";
    this._camera._state = true;
    this._videoBlock = document.createElement("div");
    this._videoBlock.className = "video_camera";
}

ViewCamera.prototype = Object.create(Service.prototype);
ViewCamera.prototype.constructor = ViewCamera;

ViewCamera.prototype.stateChangeCamera = function () {
    if (this._camera._state) {
        this._state.style.color = "rgb(11, 255, 2)";
        this._typeCamera.style.fontSize = "25px";
        this._modeCamera.style.fontSize = "25px";
    } else {
        this._state.style.color = "red";
        this._typeCamera.style.fontSize = "0px";
        this._modeCamera.style.fontSize = "0px";
    }
};

ViewCamera.prototype.stateTypeCamera = function () {
    if (this._camera._typeVideo) {
        this._typeCamera.innerHTML = "Тип: record";
        this._videoBlock.style.backgroundImage = "url('./img3.jpg')";
    } else {
        this._typeCamera.innerHTML = "Тип: live";
        this._videoBlock.style.backgroundImage = "url('./img2.jpg')";
    }
};

ViewCamera.prototype.stateModeCamera = function () {
    if (this._camera._modeRecording) {
        this._modeCamera.innerHTML = "Режим: дневной";
        this._videoBlock.style.backgroundImage = "url('./img3.jpg')";
    } else {
        this._modeCamera.innerHTML = "Режим: ночной";
        this._videoBlock.style.backgroundImage = "url('./img.jpg')";
    }
};



ViewCamera.prototype.renderCamera = function () {

    var name = document.createElement("p");
    name.className = "name_camera";
    name.innerHTML = "Камера <hr>";

    var nameType = document.createElement("p");
    nameType.className = "name_type";
    nameType.innerHTML = "Тип записи";

    var nameRes = document.createElement("p");
    nameRes.className = "name_res";
    nameRes.innerHTML = "Режим записи";

    var cameraBlock = document.createElement("div");
    cameraBlock.className = "camera_block";

    var model = document.createElement("span");
    model.className = "model_camera";
    model.innerHTML = "Модель: " + this._camera._model;

    var iOn = document.createElement("i");
    iOn.className = "fas fa-power-off";

    var iOff = document.createElement("i");
    iOff.className = "fas fa-power-off";

    var onBut = document.createElement("button");
    onBut.type = "button";
    onBut.className = "on";
    onBut.addEventListener('click', () => {
        this._camera.on();
        this.stateChangeCamera();
        this._videoBlock.style.backgroundImage = "url('./img3.jpg')";
    });

    var offBut = document.createElement("button");
    offBut.type = "button";
    offBut.className = "off";
    offBut.addEventListener('click', () => {
        this._camera.off();
        this.stateChangeCamera();
        this._videoBlock.style.background = "black";
    });

    var recordBut = document.createElement("button");
    recordBut.type = "button";
    recordBut.className = "record";
    recordBut.innerHTML = "record";
    recordBut.addEventListener('click', () => {
        this._camera.recordType();
        this.stateTypeCamera();
    });

    var liveBut = document.createElement("button");
    liveBut.type = "button";
    liveBut.className = "live";
    liveBut.innerHTML = "live";
    liveBut.addEventListener('click', () => {
        this._camera.liveType();
        this.stateTypeCamera();
    });

    var dayBut = document.createElement("button");
    dayBut.type = "button";
    dayBut.className = "day";
    dayBut.innerHTML = "дневной";
    dayBut.addEventListener('click', () => {
        this._camera.dayMode();
        this.stateModeCamera();
    });

    var nightBut = document.createElement("button");
    nightBut.type = "button";
    nightBut.className = "night";
    nightBut.innerHTML = "ночной";
    nightBut.addEventListener('click', () => {
        this._camera.nightMode();
        this.stateModeCamera();
    });

    this.stateChangeCamera();
    this.stateTypeCamera();
    this.stateModeCamera();

    cameraBlock.appendChild(name);
    this._videoBlock.appendChild(this._typeCamera);
    this._videoBlock.appendChild(this._modeCamera);
    this._videoBlock.appendChild(this._state);
    cameraBlock.appendChild(onBut).append(iOn);
    cameraBlock.appendChild(offBut).append(iOff);
    cameraBlock.appendChild(nameType);
    cameraBlock.appendChild(recordBut);
    cameraBlock.appendChild(liveBut);
    cameraBlock.appendChild(nameRes);
    cameraBlock.appendChild(dayBut);
    cameraBlock.appendChild(nightBut);
    cameraBlock.appendChild(model);
    this._videoAdd.appendChild(this._videoBlock);
    this._videoAdd.appendChild(cameraBlock);
};