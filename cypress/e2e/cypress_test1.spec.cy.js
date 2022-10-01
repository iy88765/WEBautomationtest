import { GamesPage } from "../pages/gamesPage.cy";

const gamesPage = new GamesPage();
const searchRequest = "juicy"
const noResultRequest = "noresult"

describe('Search', () =>{
    it('Succsesfull search', () =>{
        gamesPage.navigate()
        gamesPage.typeSearchQuery(searchRequest)
        gamesPage.getSearchResults().should('have.length', 6)
    })

    it('No Results Search', () =>{
        gamesPage.navigate()
        gamesPage.typeSearchQuery(noResultRequest)
        gamesPage.getSearchResults().should('have.length', 0)
        expect(gamesPage.getEmptySearchPlaceholder()).to.exist
    })

})

    