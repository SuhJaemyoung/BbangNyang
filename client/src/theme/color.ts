interface Color {
  [key: string]: string;
}

interface Colors {
  [key: string]: Color;
}

const color: Colors = {
  primary: {},
  background: {
    main: '#f6f6d3',
    translucentBlack: '#00000050',
  },
};

export default color;
