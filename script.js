function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class MarqueeComponent extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleCardClick",



    index => {
      this.setState({ activeCard: index });
    });_defineProperty(this, "handleClosePopup",

    () => {
      this.setState({ activeCard: null });
    });this.state = { activeCard: null };}

  render() {
    const { activeCard } = this.state;
    const leftCards = ["rectang4", "rectang2", "rectang1", "rectang5", "rectang6", "rectang7", "rectang8", "rectang9", "rectang10"].map((shape, index) => 
    React.createElement(leftCard, { key: index, index: index, shape: shape, onClick: this.handleCardClick }));
    const rightCards = ["square1", "square2", "square3", "square4", "square5", "square6", "square7", "square9", "square10"].map((shape, index) => 
    React.createElement(rightCard, { key: index, index: index, shape: shape, onClick: this.handleCardClick }));

    return (
      React.createElement("div", { onClick: this.handleClosePopup }, 
      React.createElement("article", { className: "wrapper" }, 
      React.createElement("div", { className: "marquee" }, 
      React.createElement("div", { className: "marquee__group" }, leftCards), 
      React.createElement("div", { className: "marquee__group" }, leftCards)), 

      React.createElement("div", { className: "marquee marquee--reverse" }, 
      React.createElement("div", { className: "marquee__group" }, rightCards), 
      React.createElement("div", { className: "marquee__group" }, rightCards))),


      activeCard !== null && React.createElement("div", { className: "popup" }, "You clicked on card ", activeCard + 1)));
  }}


class leftCard extends React.Component {
  render() {
    const { shape, index, onClick } = this.props;
    const imagePaths = {
      rectang1: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/12_4.jpg?v=1705644974",
      rectang2: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/12_5.jpg?v=1705644975",
      rectang3: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/2_1_9519643c-af96-4b76-8d25-98b0851bf6b2.png?v=1705914443",
      rectang4: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/12_7.jpg?v=1705644973",
      rectang5: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/12_8.jpg?v=1705644973",
      rectang6: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/2_6.png?v=1705914443",
      rectang7: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/2_3.png?v=1705914442",
      rectang8: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/2_2.png?v=1705914441",
      rectang9: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/2_4_ff10f4bf-57b8-4074-9b6a-0f3c1ba16054.png?v=1705914441",
      rectang10: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/1_1_b41a52fb-7da2-44a7-a755-235d7a247d28.png?v=1705914441",
    };

    return React.createElement("img",
      { 
        src: imagePaths[shape],
        alt: shape,
        onClick: () => onClick(index),
        width: 440,
        height: 300
      }
    );
  }
}

class rightCard extends React.Component {
  render() {
    const { shape, index, onClick } = this.props;
    const imagePaths = {
      square1: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/1-1705460357-65a742858aa72.jpg?v=1705460361",
      square2: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/2-1705460357-65a742858ac42.jpg?v=1705460361",
      square3: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/3-1705460363-65a7428baa017.jpg?v=1705460366",
      square4: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/4-1705460362-65a7428a2f2c2.jpg?v=1705460365",
      square5: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/5-1705460367-65a7428f82457.jpg?v=1705460370",
      square6: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/6-1705460368-65a742901b4fb.jpg?v=1705460371",
      square7: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/7_132b65f9-b788-487f-ab4d-5138a0f25c24.jpg?v=1705474847",
      square8: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/8_3dd7960d-eac5-47fd-b806-5946bd3b5042.jpg?v=1705474848",
      square9: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/9_5d2e67fb-0efc-4336-897a-72d33aa56359.jpg?v=1705644509",
      square10: "https://cdn.shopifycdn.net/s/files/1/0666/0672/7460/files/10_30340ee1-c942-41b4-b610-9abaac5781d3.jpg?v=1705644509",
    };

    return React.createElement("img",
      { 
        src: imagePaths[shape],
        alt: shape,
        onClick: () => onClick(index),
        width: 300,
        height: 300
      }
    );
  }
}

ReactDOM.render( React.createElement(MarqueeComponent, null), document.getElementById('root'));
