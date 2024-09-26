const h1 = React.createElement("h1",{},"cbv");
const h5 = React.createElement("h5",{},"rishin")


const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"h1 tag"),
    React.createElement("h2",{},"h2 tag")]),React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag")])])
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);                                                       