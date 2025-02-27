interface Color {
  [key: string]: string;
}

interface Colors {
  [key: string]: Color;
}

const color: Colors = {
  primary: {
    darkYellow: '#FFD46E',
    lightBrown: '#DCA660',
  },
  bakery: {
    doorBack: '#DDA660',
  },
  background: {
    main: '#f6f6d3',
    translucentBlack: '#00000050',
  },
  button: {
    darkYellow: '#FDBE1F',
    yellow: '#f9f4c6',
    lightYellow: '#f5efba',
    orange: '#FF8E1D',
    darkGray: '#666666',
    gray: '#d3d3d3',
    lightGray: '#d8d8d8',
  },
};

export default color;
