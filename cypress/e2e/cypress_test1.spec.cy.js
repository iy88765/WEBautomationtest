import { GamesPage } from "../pages/gamesPage.cy";

const gamesPage = new GamesPage();

const searchRequest = "poker"

describe('Search', () =>{
    it('Succsesfull search', () =>{
        gamesPage.navigate()
        gamesPage.typeSearchQuery(searchRequest)
        gamesPage.clearSearchField()
    })
})