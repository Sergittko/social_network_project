// import profileReducer from "./profile_reducer";
// import dialogsReducer from "./dialogs_reducer";
//
// let store = {
//   _state: {
//     profilePage: {
//       userInfoData: [
//         {
//           name: "Sedgio D.",
//           birth: "9 october",
//           adress: "Kiev",
//           age: "20",
//           education: "DUT",
//           imageSrc:
//             "https://cutewallpaper.org/21/kill-bill-background/Kill-Bill-wallpapers-HD-for-desktop-backgrounds.jpg"
//         }
//       ],
//       postsData: [
//         {
//           liked: "false",
//           likesNumber: "100",
//           dataId: "1",
//           message: "Tarrantino and Nolan are films genius!!"
//         },
//         {
//           liked: "true",
//           likesNumber: "7",
//           dataId: "2",
//           message:
//             "Found a cool citate from Kill Bill, like and ill send u in messages it"
//         },
//         {
//           liked: "false",
//           likesNumber: "9",
//           dataId: "3",
//           message:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, aspernatur velit. Ea provident vitae eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cum, dicta minima excepturi aliquid ea laboriosam odit beatae, accusantium unde magnam, sapiente earum quibusdam cupiditate reiciendis nam porro quidem ullam reprehenderit ab impedit quas illum. Odio qui debitis deserunt tenetur, provident, rem consequuntur perspiciatis eius magni iste, ex atque magnam voluptatibus molestias commodi. Assumenda quam, ratione quia cumque voluptatem, nesciunt facilis non, mollitia dolor corporis saepe illo optio fugit neque. Neque ipsa nulla ab adipisci? Ab non enim dolore possimus eaque neque odio vel magni veniam nam molestiae repellat, veritatis quas ipsum, voluptate rem et, est qui iste repudiandae eius."
//         }
//       ],
//       postTextareraValue: ""
//     },
//
//     dialogsPage: {
//       dialogsData: [
//         {
//           id: 1,
//           name: "Katty",
//           imgSrc:
//             "https://static.wikia.nocookie.net/f3cdbe58-ce42-44a5-9f8a-3e315795e557"
//         },
//         {
//           id: 2,
//           name: "Roman",
//           imgSrc:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezhKQo5IS4Esh_yG1xqhAinF6CeQGMwoHQQOXmHcDV7eZ3q8mpIp86a4UNrU0CoePuzk&usqp=CAU"
//         },
//         {
//           id: 3,
//           name: "Anton",
//           imgSrc:
//             "https://static10.tgstat.ru/channels/_0/eb/ebc6c684684470edfa9270bffe42cd38.jpg"
//         },
//         {
//           id: 4,
//           name: "Nasty",
//           imgSrc:
//             "http://pm1.narvii.com/7614/6496be86f2e4967a9e6fc374b9c3faa724f52475r1-1280-720v2_uhq.jpg"
//         },
//         {
//           id: 5,
//           name: "Victor",
//           imgSrc:
//             "https://static.wikia.nocookie.net/fe0a5536-d942-4929-b7d6-7e54dd917f71"
//         },
//         {
//           id: 6,
//           name: "Stas",
//           imgSrc:
//             "https://ih1.redbubble.net/image.881534317.4450/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
//         }
//       ],
//       messagesData: [
//         { id: 1, message: "Hi!!" },
//         { id: 2, message: "How it's going?" },
//         { id: 3, message: "Do u like React?" },
//         {
//           id: 4,
//           message:
//             "Revenge is never a straight line. It’s a forest, and like a forest it’s easy to lose your way, to get lost, to forget where you came in."
//         }
//       ],
//       messagesUserData: [
//         { id: 1, message: "Hello!!" },
//         { id: 2, message: "Fine :)" },
//         { id: 3, message: "01111001 01100101 01110011" }
//         // { id: 44, message: "Oh fuck" }
//       ],
//       messageTextareaValue: ""
//     }
//   },
//
//   _callRender() {
//     console.log("State changed, but function was not hand over...");
//   },
//
//   render(observer) {
//     this._callRender = observer;
//   },
//
//   getState() {
//     return this._state;
//   },
//
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//     this._callRender(this._state);
//   }
// };
//
// window.store = store;
// window.state = store._state;
//
// export default store;
