import {getPageNumber, getNumberOfPages, getPageRange} from './pageUtil';


describe("getPageNumber",()=>{

    it("Page number is 0",()=>{

        const pageNumber = getPageNumber(10,0);
        expect(pageNumber).toEqual(0);
    })

    it("Page number is -1",()=>{

        const pageNumber = getPageNumber(10,-1);
        expect(pageNumber).toEqual(0);
    })

    it("Page number is -greater then number of pages",()=>{

        const pageNumber = getPageNumber(10,15);
        expect(pageNumber).toEqual(10);
    })

    it("Page number is -greater is qual to page number",()=>{

        const pageNumber = getPageNumber(10,10);
        expect(pageNumber).toEqual(10);
    })

    it("Page number is -littler then number of pages",()=>{

        const pageNumber = getPageNumber(10,9);
        expect(pageNumber).toEqual(9);
    })
    it("13",()=>{

        const pageNumber = getPageNumber(10,13);
        expect(pageNumber).toEqual(10);
    })

})



describe("getPageRange",()=>{

    it("Normal case ",()=>{

        const pageNumber = getPageRange(2, 10, 5);
        expect(pageNumber).toEqual( [2, 3, 4, 5, 6]);
    })

    it("requested page is less then zero ",()=>{
        const pageNumber = getPageRange(-1, 10, 5);
        expect(pageNumber).toEqual( [1, 2, 3, 4, 5]);
    })

    it("requested page is greter then number of availbel pages ",()=>{
        const pageNumber = getPageRange(7, 10, 5);
        expect(pageNumber).toEqual( [6, 7,8, 9,10]);
    })

    it("requested page is greter then number of availbel pages ",()=>{
        const pageNumber = getPageRange(11, 10, 5);
        expect(pageNumber).toEqual( [6, 7,8, 9,10]);
    })

    it("requested page is greter then number of availbel pages ",()=>{
        const pageNumber = getPageRange(10, 10, 5);
        expect(pageNumber).toEqual( [6, 7,8, 9,10]);
    })

    it("requested page is greter then number of availbel pages ",()=>{
        const pageNumber = getPageRange(9, 10, 5);
        expect(pageNumber).toEqual( [6, 7,8, 9,10]);
    })
   
})


describe("getNumberOfPages",()=>{

    it("Normal case ",()=>{

        const pageNumber = getNumberOfPages(1500, 100);
        expect(pageNumber).toEqual(15);
    })

    it("devision in 0",()=>{

        const pageNumber = getNumberOfPages(0,100);
        expect(pageNumber).toEqual(0);
    })

    it("number of pages less then 0 ",()=>{

        const pageNumber = getNumberOfPages(-1,100);
        expect(pageNumber).toEqual(0);
    })

    it("prepage less then 0",()=>{

        const pageNumber = getNumberOfPages(10,-1);
        expect(pageNumber).toEqual(0);
    })
})