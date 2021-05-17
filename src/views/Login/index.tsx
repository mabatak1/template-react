import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import {
  Button,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Input,
  InputGroup,
  InputGroupAddon,
  Jumbotron,
} from "reactstrap";
import { login } from "redux/modules/auth/actions";
import { GetAuthSelector } from "redux/selectors/auth";

const items = [
  {
    src: "https://i.pinimg.com/originals/dc/1b/09/dc1b097ff6669a790edbc87e1514bdbd.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "https://i.pinimg.com/originals/11/c6/0d/11c60d1baacff6e76068236b2324e420.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "https://i.pinimg.com/originals/2d/5a/b1/2d5ab14f89532f6529fb2cf0f0cf4f3c.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const LoginPage = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = GetAuthSelector();
  const { isLogin } = auth;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  if (isLogin) {
    return <Redirect to="/" />;
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div style={{ height: "100%", width: "100%" }} className="p-3">
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <div>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
      <div className="mt-5">
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button
              onClick={() => {
                // history.push("/");
                // return <Redirect to="/" />;
                dispatch(login("don", "don"));
              }}
              color="primary"
            >
              Learn More
            </Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};
export default LoginPage;
