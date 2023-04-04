import React, {createClass, useEffect, useState} from 'react';

function getAnglePoint(startAngle, endAngle, radius, x, y) {
  const x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
  const y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
  const x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
  const y2 = y + radius * Math.sin(Math.PI * endAngle / 180);

  return {x1, y1, x2, y2};
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default function Pie({colors, hole = 50, radius = 70, deg=359.99,
                              data, stroke, strokeWidth}) {
  const colorsLength = colors.length
  const diameter = radius * 2
  const sum = data.reduce(function (carry, current) {
    return carry + current
  }, 0);
  let startAngle = 180;

  return (
    <svg width={diameter} height={diameter} viewBox={'0 0 ' + diameter + ' ' + diameter}
         xmlns="http://www.w3.org/2000/svg" version="1.1">
      {data.map(function (slice, sliceIndex) {

        const nextAngle = startAngle;
        const angle = (slice / sum) * deg;
        const percent = (slice / sum) * 100;
        startAngle += angle;

        return <Slice
          key={sliceIndex}
          value={slice}
          percent={percent}
          percentValue={percent.toFixed(1)}
          startAngle={nextAngle}
          angle={angle}
          radius={radius}
          hole={radius - hole}
          trueHole={hole}
          fill={colors[sliceIndex % colorsLength]}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      })}

    </svg>
  );
}

function Slice({
  fill, stroke, strokeWidth, percentValue, percent, value,
  angle, startAngle, hole, radius, trueHole
               }){
  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0)
  const [ path, setPath ] = useState('')

  useEffect( () => {
    setPath('');
    draw(0);
  }, [percent])

  const draw =  (s) => {
    const path = []

    const step = angle / (37.5 / 2);

    if (s + step > angle) {
      s = angle;
    }

    // Get angle points
    const a = getAnglePoint(startAngle, startAngle + s, radius, radius, radius);
    const b = getAnglePoint(startAngle, startAngle + s, radius - hole, radius, radius);

    path.push('M' + a.x1 + ',' + a.y1);
    path.push('A' + radius + ',' + radius + ' 0 ' + (s > 180 ? 1 : 0) + ',1 ' + a.x2 + ',' + a.y2);
    path.push('L' + b.x2 + ',' + b.y2);
    path.push('A' + (radius - hole) + ',' + (radius - hole) + ' 0 ' + (s > 180 ? 1 : 0) + ',0 ' + b.x1 + ',' + b.y1);

    // Close
    path.push('Z');

    setPath(path.join(' '))

    if (s < angle) {
      setTimeout(function () {
        draw(s + step)
      }, 16);
    }
  }

  return (
    <g overflow="hidden">
      <path
        d={path}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth ? strokeWidth : 3}
      />
    </g>
  );
}
