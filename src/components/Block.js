import React from 'react';
import styled from 'styled-components';
import '../styles/Block.css';


const Scene = styled.div`
  height: 100%;
  &.active{
    .heading,
    .scroll-down,
    .click-blocks,
    .pagination {
      opacity: 0;
      z-index: -100;
  }
  .Heading {
      transform: translateX(-50%) translateY(-50%) scale(0.5);
  }
  .scroll-down {
    transform: rotate(-90deg) scale(0.5);
  }
  .click-blocks {
    transform: rotate(-90deg) scale(0.5);
  }
  .pagination {
    transform: translateX(-50%) translateY(-50%) scale(0.5);
  }
  .img-cont.active {
    margin-top: -10vh !important; // god forgive me
    width: 50vw;
    height: 100vh;
    transition: margin 0.3s, width 0.3s, height 0.3s;
    z-index: 500;
    
    &.left {
      margin-left: -50vw;
    }
    &.right {
      margin-left: 0;
    }
  }
}`

const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
  font-size: 5vw;
  font-family: ptsans-bold;
  color: #ce2312;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;
  will-change: opacity, transform;

  transform: translateX(-50%) translateY(-50%) scale(0.5);
`

const ScrollDown = styled.p`
  position: absolute;
  bottom: 13%;
  left: 50%;
  transform-origin: 0% 50%;
  transform: rotate(-90deg);
  font-family: pfs-regular;
  font-size: 1.3vmax;
  transition: opacity 0.3s, transform 0.3s;
  will-change: opacity, transform;
  z-index: 100;
  transform: rotate(-90deg) scale(0.5);
`
const ClickBlocks = styled.p`
  position: absolute;
  top: 23%;
  left: 50%;
  transform-origin: 0% 50%;
  transform: rotate(-90deg);
  font-family: pfs-regular;
  font-size: 1.3vmax;
  transition: opacity 0.3s, transform 0.3s, color 0.3s;
  will-change: opacity, transform;
  z-index: 100;
  transform: rotate(-90deg) scale(0.5);
`

const Pagination = styled.div`
  position: absolute;
  left: 50%;
  top: 95%;
  transform: translateX(-50%) translateY(-50%);
  transition: opacity 0.3s, transform 0.3s;
  will-change: opacity, transform;
  z-index: 100;
  
  transform: translateX(-50%) translateY(-50%) scale(0.5);

  .page-names {
    text-align: center;
    margin-bottom: 1vh;
    font-size: 1.2vw;
    
    li {
      display: none;
      will-change: opacity;
      font-family: ptsans-bold;
      
      &.active {
        display: block;
      }
    }
  }
  
  .page-dots {
    text-align: center;
    
    li {
      margin: 0.3vw;
      float: left;
      cursor: pointer;
      color: #cfcfcf;
      
      &.active {
        color: #020202;
      }
    }
  }
`

const ImageCont = styled.div`
  height: 80vh;
  width: 35vw;
  position: absolute;
  top: 10vh;
  left: 50%;
  background-size: cover;
  transition: margin 1s cubic-bezier(0.99,0.1,0.35,1.2);
  will-change: margin;
  z-index: 10;
  
  &:active{
    margin-top: -10vh !important; // god forgive me
    width: 50vw;
    height: 100vh;
    transition: margin 0.3s, width 0.3s, height 0.3s;
    z-index: 500;
    
    &.left {
      margin-left: -50vw;
    }
    &.right {
      margin-left: 0;
    }
  }

  &.closing {
    transition: margin 0.3s, width 0.3s, height 0.3s;
  }
  
  &:not(.active) { 
    cursor: pointer;
    
    &:hover ~ .click-blocks {
      color: #ce2312;
    }
  }
  
  &.left {
    margin-left: calc(-35vw - 50px);
  }
  &.right {
    margin-left: 50px;
  }
  
  &.cont-1 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/2side-pagi-1.jpg') 50% 50% no-repeat fixed;
  }
  &.cont-2 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/2side-pagi-2.jpg') 50% 50% no-repeat fixed;
  }
  &.cont-3 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/2side-pagi-3.jpg') 50% 50% no-repeat fixed;
  }
  &.cont-4 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/2side-pagi-4.jpg') 50% 50% no-repeat fixed;
  }
  
  @for $i from 2 through 10 {
    &.cont-#{$i} {
      &.left {
        margin-top: -100vh * ($i - 1);
      }
      &.right {
        margin-top: 100vh * ($i - 1);
      }
    }
  }
  
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background: rgba(0,0,0, 0.5);
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  color: #f9bdbb;
  z-index: 2000;
  
  &.visible {
    opacity: 1;
    
    .title {
      transform: translateX(0);
    }

    .content-text {
      transform: scale(1);
      opacity: 1;
    }
    
    .close {
      transform: rotate(45deg);
    }
  }
  
  .title {
    font-size: 4rem;
    text-transform: uppercase;
    font-family: pfs-medium;
    transition: transform 0.5s 0.1s;
    transform: translateX(-115%);
  }

  .content-text {
    font-family: pfs-medium;
    font-size: 2rem;
    transition: transform 0.5s 0.2s, opacity 0.3s 0.2s;
    transform-origin: 50% 80%;
    transform: scale(0.3);
    opacity: 0;
  }
  
  .close {
    position: absolute;
    top: -0.5rem;
    right: 1rem;
    font-family: metropolis, sans-serif;
    font-size: 4rem;
    color: #fff;
    transform: rotate(45deg) translateY(-5rem);
    cursor: pointer;
    transition: transform 0.5s 0.3s cubic-bezier(0.45, 0.25, 0.7, 1.8), color 0.3s;

    &:hover {
      color: #FF524C;
    }
  }
`
const CheckOut = styled.p`
  position: absolute;
  z-index: 1;
  bottom: 1rem;
  right: 1rem;
  font-family: pfs-regular;
`

export default class Block extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.pages = React.createRef();
    this.left1 = React.createRef();
    this.right1 = React.createRef();
    this.left2 = React.createRef();
    this.right2 = React.createRef();
    this.left3 = React.createRef();
    this.right3 = React.createRef();
    this.left4 = React.createRef();
    this.right4 = React.createRef();
    this.state = {
      scrolling: false,
      curPage:1,
      pages: 4,
      left: [this.left1, this.left2, this.left3, this.left4],
      right: [this.right1, this.right2, this.right3, this.right4]
    };

    
  } 

  doMargins = (paramPage) =>{   
    this.setState({scrolling : true});
    
    var _page = paramPage || this.state.curPage;
    
    this.state.left.map((item, index) => {
      var marginMult = parseInt( (item).current.getAttribute("data-helper"), 10 ) + _page - 1;
      (item).current.getAttribute("style", "margin-top: "+ marginMult * 100 +"vh");

    });

    
    this.state.right.map((item, index) => {
      var marginMult = parseInt((item).current.getAttribute("data-helper"), 10) - _page + 1;
      (item).current.getAttribute("style", "margin-top: "+ marginMult * 100 +"vh");

    });
    
    setTimeout(()=> {
      this.setState({scrolling : false});
    }, 1000);
  };

  pagination(page) {
    //$(".page-dots li").removeClass("active");
    //$(".page-dots li[data-page="+ page +"]").addClass("active");
    //$(".page-names li").removeClass("active");
    //$(".page-names li[data-page="+page+"]").addClass("active");
    this.setState({curPage:this.state.page});
  };

  navigateUp = ()=> {
    if (this.state.curPage > 1) {
      this.setState({curPage: this.state.curPage-1});
      this.pagination(this.state.curPage);
      this.doMargins();
    }
  };

  navigateDown = () => {
    if (this.state.curPage < this.state.pages) {
      this.setState({curPage: this.state.curPage+1});
      this.pagination(this.state.curPage);
      this.doMargins();
    }
  };

  handleScroll = (event) => {
    switch (event.deltaY > 0) {
      case true:
        console.log('positive');
        this.navigateDown();
        break;
      case false:
        console.log('negative');
        this.navigateUp();
        break;
      default:
        break;

    }
  };

  componentDidMount() {
    window.addEventListener('mousewheel', this.handleScroll);
  };

  render() {


    return (
      <div>
      <Scene ref={this.wrapper}>
        <ImageCont ref={this.left1} className="img-cont left cont-1" data-helper="0" data-blocks="1"></ImageCont>
        <ImageCont ref={this.right1} className="img-cont right cont-1" data-helper="0" data-blocks="1"></ImageCont>
        <Content className="content cont-1">
          <h2 className="title">Page 1 Content</h2>
          <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
          <span className="close">+</span>
        </Content>
        <ImageCont ref={this.left2} className="img-cont left cont-2" data-helper="-1" data-blocks="2"></ImageCont>
        <ImageCont ref={this.right2} className="img-cont right cont-2" data-helper="1" data-blocks="2"></ImageCont>
        <Content className="content cont-2">
          <h2 className="title">Page 2 Content</h2>
          <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
          <span className="close">+</span>
        </Content>
        <ImageCont ref={this.left3} className="img-cont left cont-3" data-helper="-2" data-blocks="3"></ImageCont>
        <ImageCont ref={this.right3} className="img-cont right cont-3" data-helper="2" data-blocks="3"></ImageCont>
        <Content className="content cont-3">
          <h2 className="title">Page 3 Content</h2>
          <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
          <span className="close">+</span>
        </Content>
        <ImageCont ref={this.left4} className="img-cont left cont-4" data-helper="-3" data-blocks="4"></ImageCont>
        <ImageCont ref={this.right4} className="img-cont right cont-4" data-helper="3" data-blocks="4"></ImageCont>
        <Content className="content cont-4">
          <h2 className="title">Page 4 Content</h2>
          <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
          <span className="close">+</span>
        </Content>

        <Heading>AWESOME</Heading>
        <ScrollDown>scroll down</ScrollDown>
        <ClickBlocks>click blocks</ClickBlocks>
        <Pagination>
          <ul className="page-names">
            <li className="active" data-page="1">Page 1</li>
            <li data-page="2">Page 2</li>
            <li data-page="3">Page 3</li>
            <li data-page="4">Page 4</li>
          </ul>
          <ul className="page-dots">
            <li className="active" data-page="1">•</li>
            <li data-page="2">•</li>
            <li data-page="3">•</li>
            <li data-page="4">•</li>
          </ul>
        </Pagination>
      </Scene>
    </div>
    )
  }
}

