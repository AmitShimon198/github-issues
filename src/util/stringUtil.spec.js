import { extractImage } from './stringUtil'

describe("extractImage", () => {

    it("image on start test", () => {

        const pageNumber = extractImage("![image](https://advfv.png) Hi Hi");
        expect(pageNumber).toEqual([
            {
                type: "image",
                value: "https://advfv.png"
            },
            {
                type: "text",
                value: " Hi Hi",
            },
        ]);
    })

    it("new test", () => {

        const pageNumber = extractImage("Hello Amit ![image](https://advfv.png) Hi Hi");
        expect(pageNumber).toEqual([
            {
                type: "text",
                value: "Hello Amit ",
            },
            {
                type: "image",
                value: "https://advfv.png"
            },
            {
                type: "text",
                value: " Hi Hi",
            },
        ]);
    })

    it("multiple images test", () => {

        const pageNumber = extractImage("Hello Amit ![image](https://advfv.png) ![image](https://2vfv.png)");
        expect(pageNumber).toEqual([
            {
                type: "text",
                value: "Hello Amit ",
            },
            {
                type: "image",
                value: "https://advfv.png"
            },
            {
                type: "image",
                value: "https://advfv.png"
            }
        ]);
    })

    it("multiple images test", () => {

        const pageNumber = extractImage("![image](https://advfv.png) ![image](https://advfv.png) Hello Amit ");
        expect(pageNumber).toEqual([

            {
                type: "image",
                value: "https://advfv.png"
            },
            {
                type: "image",
                value: "https://advfv.png"
            },
            {
                type: "text",
                value: " Hello Amit ",
            },
        ]);
    })
})