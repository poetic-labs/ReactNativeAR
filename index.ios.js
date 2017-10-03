import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';

export default class ReactNativeAR extends Component {

  planeDetected(id, center, extent) {
    console.log('planeDetected: ', id, center, extent);
  }

  planeUpdated(e) {
    console.log('planeUpdated: ', e);
  }

  hitTestPlanes(e) {
    console.log('hitTestPlanes: ', e);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          debug
          planeDetection
          lightEstimation
          onPlaneDetected={this.planeDetected} // event listener for plane detection
          onPlaneUpdate={this.planeUpdated} // event listener for plane update
        >
          <ARKit.Text
            text="Poetic AR"
            position={{ x: 0.2, y: 0.6, z: 0 }}
            font={{ size: 0.15, depth: 0.05 }}
          />
        
          <ARKit.Box
            pos={{ x: 0, y: 0, z: 0 }}
            shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
          />
        </ARKit>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeAR', () => ReactNativeAR);
