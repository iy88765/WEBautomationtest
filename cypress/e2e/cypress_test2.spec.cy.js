import { GamesPage } from "../pages/gamesPage.cy";

const gamesPage = new GamesPage();

const item = "Sic Bo"

describe('Filter', () =>{
    it('Succsesfull filtering', () =>{
        gamesPage.navigate()
        gamesPage.openDropdown()
        gamesPage.checkFilterItem(item)
    })
})