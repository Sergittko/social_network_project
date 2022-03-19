import profileReducer, { addPost, deletePost } from "./profile_reducer";

let state = {
  postsData: [
    {
      liked: "false",
      likesNumber: "99",
      dataId: 1,
      message: "Tarrantino and Nolan are films genius!!"
    },
    {
      liked: "true",
      likesNumber: "7",
      dataId: 2,
      message:
        "Found a cool citate from Kill Bill, like and ill send u in messages it"
    },
    {
      liked: "false",
      likesNumber: "9",
      dataId: 3,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, aspernatur velit. Ea provident vitae eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cum, dicta minima excepturi aliquid ea laboriosam odit beatae, accusantium unde magnam, sapiente earum quibusdam cupiditate reiciendis nam porro quidem ullam reprehenderit ab impedit quas illum. Odio qui debitis deserunt tenetur, provident, rem consequuntur perspiciatis eius magni iste, ex atque magnam voluptatibus molestias commodi. Assumenda quam, ratione quia cumque voluptatem, nesciunt facilis non, mollitia dolor corporis saepe illo optio fugit neque. Neque ipsa nulla ab adipisci? Ab non enim dolore possimus eaque neque odio vel magni veniam nam molestiae repellat, veritatis quas ipsum, voluptate rem et, est qui iste repudiandae eius."
    }
  ]
};

it("posts data length should be incremented", () => {
  let action = addPost("test post");
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(4);
});

it("posts message should be correct", () => {
  let action = addPost("test post");
  let newState = profileReducer(state, action);
  expect(newState.postsData[0].message).toBe("test post");
});

it("postData length should be decremented after deleting", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
});

it("postData length shouldn't be decremented after deleting if deleted id is undefuned", () => {
  let action = deletePost(10000);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});
