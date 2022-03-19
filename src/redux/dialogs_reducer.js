const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Katty",
      imgSrc:
        "https://static.wikia.nocookie.net/f3cdbe58-ce42-44a5-9f8a-3e315795e557"
    },
    {
      id: 2,
      name: "Roman",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezhKQo5IS4Esh_yG1xqhAinF6CeQGMwoHQQOXmHcDV7eZ3q8mpIp86a4UNrU0CoePuzk&usqp=CAU"
    },
    {
      id: 3,
      name: "Anton",
      imgSrc:
        "https://static10.tgstat.ru/channels/_0/eb/ebc6c684684470edfa9270bffe42cd38.jpg"
    },
    {
      id: 4,
      name: "Nasty",
      imgSrc:
        "http://pm1.narvii.com/7614/6496be86f2e4967a9e6fc374b9c3faa724f52475r1-1280-720v2_uhq.jpg"
    },
    {
      id: 5,
      name: "Victor",
      imgSrc:
        "https://static.wikia.nocookie.net/fe0a5536-d942-4929-b7d6-7e54dd917f71"
    },
    {
      id: 6,
      name: "Stas",
      imgSrc:
        "https://ih1.redbubble.net/image.881534317.4450/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
    }
  ],
  messagesData: [
    { id: 1, message: "Hi!!" },
    { id: 2, message: "How it's going?" },
    { id: 3, message: "Do u like React?" },
    {
      id: 4,
      message:
        "Revenge is never a straight line. It’s a forest, and like a forest it’s easy to lose your way, to get lost, to forget where you came in."
    }
  ],
  messagesUserData: [
    { id: 1, message: "Hello!!" },
    { id: 2, message: "Fine :)" },
    { id: 3, message: "01111001 01100101 01110011" }
  ]
};

export const messageTextareaAction = text => ({ type: SEND_MESSAGE, text });

let newMessId = 5;

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      ++newMessId;
      return {
        ...state,
        messagesUserData: [
          ...state.messagesUserData,
          { id: newMessId, message: action.text }
        ]
      };
    default:
      return state;
  }
};

export default dialogsReducer;
