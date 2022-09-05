

export const mainTheme = {
    colors: {
        primary: '#77A03F',
        primaryLight: "#F6F9F0",
        primaryMiddle: "#E2EED3",
        secondary: '#F7F7F5', // #ECF3E2
        secondaryDark: "#EBEBE8",
        tertiary: '#C79900', // yellow
        tertiaryLight: "#F2F6F2",
        red: '#B85B33',
        blue: '#387278',
        blueLight: '#BADBDE',
        brown: "#714E07",
        purple: "#916C83",
        //green: '#77A03F',
        //lightGreen: '#a8c66c',
        //lightBlue: '#e1dd72',
        
        //gray: '#E9E9DF',
        dark: '#001A00',
        //blue: '#295F83',
        //yellow: '#e1dd72',
        //yellow: '#C7AB01',
        //red: '#AB4405',
        //brown: '#594B32',
        white: '#FFF',
        faded: "001A00"
    },
    font: {
        family: "roboto", // am i using this or the other?
        sizes: {
            xxl: 72,
            xl: 42, // 
            l: 32, // normal titles, sections
            m: 20, // small titles
            s: 16 // texti almennt eða bold subsection title
        },
        space: {
            text: 0.3,
            title: 0
        }
    },
    shadow: "0 0 15px #ccc",
    shadowBottom: "0 10px 8px #e4e4e4",
    deepShadow: "0 0 25px #a1a1a1",
    layout: {
        containerWidth: "1200px",
        columns: '[full-start] minmax(1em, 1fr) [main-start] minmax(0, 80em) [main-end] minmax(1em, 1fr) [full-end]',
    },
    fontFamily: "'Roboto', sans-serif"
}

declare global {
    type Colors = keyof typeof mainTheme["colors"]
}
// FB8B24

// #DDF8E8 slime green
// D7DAE5 bluegray