const userService = (() => {
    const getUsers = async (callback) => {
        let responser = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        if (callback) {
            callback(users, posts);
        }
    };
})();
