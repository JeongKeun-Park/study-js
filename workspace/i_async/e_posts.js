// 게시글 정보를 받은 후
// 모듈화 사용
// 게시글번호 1~n번 출력하기

// const postsService = (() => {
//     const getPost = async (id, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const post = await response.json();
//         if (callback) {
//             return callback(id, post);
//         }
//     };
//     return {
//         getPost: getPost,
//     };
// })();

// const findId = (id, post) => {
//     return post.filter((post) => post.id <= id);
// };

// const printPosts = async () => {
//     const myPosts = await postsService.getPost(20, findId);
//     console.log(myPosts);
// };

// printPosts();

// users에서 id와 city만 출력하기

const userService = (() => {
    const getUsers = async (callback1) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const user = await response.json();
        callback1(user);
    };
    return {
        getUsers: getUsers,
    };
})();

// const id = (user) => {
//     user.filter((user) => user.id <= 10).forEach(({ id }) => console.log(id));
// };

const address = (user) => {
    // const findId = user.forEach(({ id }) => console.log(id));
    user.map((user) => user.address).forEach(({ city }) => {
        console.log(city);
    });
};

userService.getUsers(address);
