
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
            white: "#fff",
            black: "#000",
            gray: {
              "100": "rgba(0, 0, 0, 0.5)",
              "200": "rgba(0, 0, 0, 0.6)",
              "300": "rgba(0, 0, 0, 0.1)",
            },
            gainsboro: "rgba(217, 217, 217, 0.5)",
          },
        
          spacing: {},
          fontFamily: {
            roboto: "Roboto",
          },
        },
        fontSize: {
          base: "1rem",
          sm: "0.875rem",
          "21xl": "2.5rem",
          "5xl": "1.5rem",
          "13xl": "2rem",
          xl: "1.25rem",
          xs: "0.75rem",
          inherit: "inherit",
        },
        screens: {
          mq1150: {
            raw: "screen and (max-width: 1150px)",
          },
          mq1100: {
            raw: "screen and (max-width: 1100px)",
          },
          mq1050: {
            raw: "screen and (max-width: 1050px)",
          },
          mq1025: {
            raw: "screen and (max-width: 1025px)",
          },
          mq750: {
            raw: "screen and (max-width: 750px)",
          },
          mq675: {
            raw: "screen and (max-width: 675px)",
          },
          mq450: {
            raw: "screen and (max-width: 450px)",
          },
        },
      },
    plugins: [],
  }
// module.exports = {
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//       extend: {
//         colors: {
//           white: "#fff",
//           black: "#000",
//           gray: {
//             "100": "rgba(0, 0, 0, 0.5)",
//             "200": "rgba(0, 0, 0, 0.6)",
//             "300": "rgba(0, 0, 0, 0.1)",
//           },
//           gainsboro: "rgba(217, 217, 217, 0.5)",
//         },
//         spacing: {},
//         fontFamily: {
//           roboto: "Roboto",
//         },
//       },
//       fontSize: {
//         base: "1rem",
//         sm: "0.875rem",
//         "21xl": "2.5rem",
//         "5xl": "1.5rem",
//         "13xl": "2rem",
//         xl: "1.25rem",
//         xs: "0.75rem",
//         inherit: "inherit",
//       },
//       screens: {
//         mq1150: {
//           raw: "screen and (max-width: 1150px)",
//         },
//         mq1100: {
//           raw: "screen and (max-width: 1100px)",
//         },
//         mq1050: {
//           raw: "screen and (max-width: 1050px)",
//         },
//         mq1025: {
//           raw: "screen and (max-width: 1025px)",
//         },
//         mq750: {
//           raw: "screen and (max-width: 750px)",
//         },
//         mq675: {
//           raw: "screen and (max-width: 675px)",
//         },
//         mq450: {
//           raw: "screen and (max-width: 450px)",
//         },
//       },
//     },
//     corePlugins: {
//       preflight: false,
//     },
//   };