export default class StateLoader {
  loadState() {
    try {
      let serializedState = localStorage.getItem("my-state");

      if (serializedState === null) {
        return this.initializeState();
      }
      // console.log("from stateLoader", serializedState);
      return JSON.parse(serializedState);
    } catch (err) {
      return this.initializeState();
    }
  }

  saveState(state) {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("my-state", serializedState);
    } catch (err) {}
  }

  initializeState() {
    return {
      //state object
    };
  }
}
