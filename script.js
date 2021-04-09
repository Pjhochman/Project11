AFRAME.registerComponent("girl4", {
  tick: function() {
    if (cameraposition < -36) {
      this.el.setAttribute("position", { x: -9.0, y: 0.299, z: 34.283 });
      this.el.setAttribute("scale", { x: 0.4, y: 0.4, z: 0.4 });
    }
    if (cameraposition < -44) {
      this.el.setAttribute("position", { x: 0, y: 0, z: 0 });
    }
  }
});

AFRAME.registerComponent("people", {
  tick: function() {
    if (cameraposition < -46) {
      this.el.setAttribute("position", {
        x: -9.22,
        y: -0.471,
        z: 47.965
      });
      this.el.setAttribute("scale", { x: 0.025, y: 0.025, z: 0.025 });
    }
  }
});

AFRAME.registerComponent("benchlight", {
  tick: function() {
    if (cameraposition < -48) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0.5,
        distance: 14,
        decay: 0.01
      });
    }
    if (cameraposition < -58) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
  }
});

AFRAME.registerComponent("lastinbuilding", {
  tick: function() {
    let lastinbuilding = this.el;
    if (cameraposition < -36.0) {
      lastinbuilding.parentNode.removeChild(lastinbuilding);
    }
  }
});

AFRAME.registerComponent("firstoutside", {
  tick: function() {
    if (cameraposition < -18) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 7,
        distance: 3,
        decay: 0.1
      });
    }
    if (cameraposition < -36) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
  }
});

AFRAME.registerComponent("secondoutside", {
  tick: function() {
    if (cameraposition < -19) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 7,
        distance: 3,
        decay: 0.1
      });
    }
    if (cameraposition < -44) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
  }
});

AFRAME.registerComponent("thirdoutside", {
  tick: function() {
    if (cameraposition < -20) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 7,
        distance: 3,
        decay: 0.1
      });
    }
    if (cameraposition < -44) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
  }
});

AFRAME.registerComponent("fourthoutside", {
  tick: function() {
    if (cameraposition < -21) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 5,
        distance: 3,
        decay: 0.1
      });
    }
    if (cameraposition < -58) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
  }
});

AFRAME.registerComponent("lastbeforegirl", {
  tick: function() {
    if (cameraposition < -49) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 4,
        distance: 3,
        decay: 0.001
      });
    }
    if (cameraposition < -62) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
  }
});

AFRAME.registerComponent("abovelastgirl", {
  tick: function() {
    if (cameraposition < -58.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 4,
        distance: 2.8,
        decay: 0.001
      });
    }
  }
});

AFRAME.registerComponent("abovehouse", {
  tick: function() {
    if (cameraposition < -58.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0.4,
        angle: 200,
        distance: 8,
        decay: 1
      });
    }
  }
});

AFRAME.registerComponent("door", {
  tick: function() {
    if (cameraposition < -58.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0.4,
        distance: 6.0,
        decay: 0.01
      });
    }
  }
});

AFRAME.registerComponent("house", {
  tick: function() {
    if (cameraposition < -48) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1,
        distance: 15,
        decay: 0.01
      });
    }
  }
});

AFRAME.registerComponent("text2", {
  tick: function() {
    if (cameraposition < -27) {
      this.el.setAttribute("text", {
        anchor: "center",
        width: 1.5,
        color: "white",
        value: "Don't"
      });
    }
  }
});

AFRAME.registerComponent("text3", {
  tick: function() {
    if (cameraposition < -32) {
      this.el.setAttribute("text", {
        anchor: "center",
        width: 1.5,
        color: "white",
        value: "Look"
      });
    }
  }
});

AFRAME.registerComponent("text4", {
  tick: function() {
    if (cameraposition < -38) {
      this.el.setAttribute("text", {
        anchor: "center",
        width: 1.5,
        color: "white",
        value: "Back"
      });
    }
  }
});

AFRAME.registerComponent("text5", {
  tick: function() {
    if (cameraposition < -38) {
      this.el.setAttribute("text", {
        anchor: "center",
        width: 1.5,
        color: "white",
        value: "Back"
      });
    }
  }
});

AFRAME.registerComponent("text6", {
  tick: function() {
    if (cameraposition < -48) {
      this.el.setAttribute("text", {
        anchor: "center",
        align: "center",
        width: 1.5,
        color: "white",
        value:
          "Surrounded by strangers\n trapped in her  t h o u g h t s\n\n She only found solitude\n in the abstract of art."
      });
    }
  }
});

AFRAME.registerComponent("text9", {
  tick: function() {
    if (cameraposition < -72) {
      this.el.setAttribute("text", {
        anchor: "center",
        align: "center",
        width: 1.5,
        color: "white",
        value: "THE END"
      });
    }
  }
});

AFRAME.registerComponent("text7", {
  tick: function() {
    if (cameraposition < -58.4) {
      this.el.setAttribute("text", {
        anchor: "center",
        align: "center",
        width: 1.5,
        color: "white",
        value:
          "She stood outside her house,\n four walls and lonesomeness would keep her sane,\n\nsadness would some say, but solitude for her, alleviating her pain."
      });
    }
  }
});

AFRAME.registerComponent("text8", {
  tick: function() {
    if (cameraposition < -38) {
      this.el.setAttribute("text", {
        anchor: "center",
        align: "center",
        width: 1.5,
        color: "white",
        value:
          "But she always did.\n\nI don't think I understand\nThe thoughts that run in my head\nI don't think I understand\nThe reason I lay awake on my bed.\n\nSo why should they?"
      });
    }
    if (cameraposition < -42) {
      this.el.setAttribute("text", {
        value: ""
      });
    }
  }
});

//Light flicker hallway
AFRAME.registerComponent("firstlight", {
  tick: function() {
    if (cameraposition < 1) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -1) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -2) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -2.1) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -2.2) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -2.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -2.5) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -2.6) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -2.7) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -3.2) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -3.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -4.1) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -4.2) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -4.3) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -5.1) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -5.2) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -5.3) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -5.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -6.0) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -6.1) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -6.2) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -6.7) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -6.8) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -6.9) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -7.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -7.5) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -7.8) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -7.9) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -8.3) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -8.4) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -8.5) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -8.6) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -8.7) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
    if (cameraposition < -8.8) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 1.5,
        distance: 2.5,
        decay: 0.1
      });
    }
    if (cameraposition < -9) {
      this.el.setAttribute("light", {
        type: "point",
        intensity: 0,
        distance: 0,
        decay: 0
      });
    }
  }
});

let cameraposition = 0;

AFRAME.registerComponent("listener", {
  tick: function() {
    cameraposition = this.el.object3D.position.z;
    // console.log(cameraposition)
  }
});

AFRAME.registerComponent("firstmodel", {
  tick: function() {
    let firstmodel = this.el;
    if (cameraposition < -9) {
      firstmodel.parentNode.removeChild(firstmodel);
    }
  }
});

function touchStarted() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
}

AFRAME.registerComponent("firstsound", {
  tick: function() {
    let firstsound = this.el;
    if (cameraposition < -10) {
      firstsound.parentNode.removeChild(firstsound);
    }
  }
});
