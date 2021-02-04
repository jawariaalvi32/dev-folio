import React, { useState } from 'react';
import emoji from 'react-easy-emoji';
import './Intro.css';
import Hero from '../../assets/images/hero.gif';
import SocialMedia from '../socialmedia/SocialMedia.js';
import { greeting } from '../../portfolio';
import { Button } from '@material-ui/core';
import { useTrail, a } from 'react-spring'


function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 25 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="f-50"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

export default function Intro() {

    const [open, set] = useState(true)

  return (
    <div bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <Trail open={open} onClick={() => set((state) => !state)}>
              <h1 className='greeting-text'>
                {' '}
                {greeting.title}{' '}
                <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
            </Trail>
              <p className='greeting-text-p subTitle'>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                  <Button variant="outlined" color="primary">View Projects</Button>
              </div>
          </div>
          <div className="greeting-image-div" style={{textAlign: "center"}}>
            <img src={Hero} />
          </div>
        </div>
      </div>
    </div>
  );
}