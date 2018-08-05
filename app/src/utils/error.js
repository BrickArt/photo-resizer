class BadRequestError extends Error {
    constructor(reason) {
        super();
        this.code = 400;
        this.message = `Bad Request Error`;
        this.errorMessage = reason;
    }
};

class UnauthorizedError extends Error {
    constructor(reason) {
        super();
        this.code = 401;
        this.message = `Unauthorized Error`;
        this.errorMessage = reason;
    }
};

class ForbiddenError extends Error {
    constructor(reason) {
        super();
        this.code = 403;
        this.message = `Forbidden Error`;
        this.errorMessage = reason;
    }
};

class NotFoundError extends Error {
    constructor(reason) {
        super();
        this.code = 404;
        this.message = `Not Found Error`;
        this.errorMessage = reason;
    }
};

class InternalServerError extends Error {
    constructor(reason) {
        super();
        this.code = 500;
        this.message = `Internal Server error`;
        this.errorMessage = reason;
    }
};

module.exports = {
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    InternalServerError
};
