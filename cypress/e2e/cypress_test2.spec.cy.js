import { GamesPage } from "../pages/gamesPage.cy";

const gamesPage = new GamesPage();

const item = "Sic Bo"

describe('Filter', () =>{
    it('Succsesfull filtering', () =>{
        gamesPage.navigate()
        gamesPage.openDropdown()
        gamesPage.clickFilterItem(item)
        gamesPage.getSearchResults().should('have.length', 1)
        gamesPage.clickFilterItem(item)
        gamesPage.getSearchResults().should('have.length', 20)
        gamesPage.closeFilter()
    })
})