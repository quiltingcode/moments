import { rest } from "msw";

const baseURL = "https://django-rest-kelz.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 6,
            "username": "Marina",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 6,
            "profile_image": "https://res.cloudinary.com/dkolsfjkx/image/upload/v1/media/../default_profile_veem15"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];
