// 댓글 모듈 만들기(resplyService)
// 작성,목록,수정,삭제

const resplyService = (() => {
    const write = (reply) => {};
    const getList = (page = 1, id, callback) => {
        const replies = [];
        if (callback) {
            callback(replies);
        }
    };
    const update = (reply) => {};
    const remove = (id) => {};
    return {
        write: write,
        getList: getList,
        update: update,
        remove: remove,
    };
})();
