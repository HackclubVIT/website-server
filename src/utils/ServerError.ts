export class ApiError extends Error {
    constructor(
        public statusCode: number,
        public status: string,
        public message: string
    ) {
        super();
    }
}
